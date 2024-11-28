import { Component, computed, input, output } from '@angular/core';
import { TabComponent } from './tab.component';
import { Tab, TabWithIndex } from '../../model/types/Tab';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="flex ai-center gap-12 bg-white">
      @for (tab of tabsWithIndex(); track tab.index) {
        <app-tab (click)="changeTab(tab)" [activeTab]="tab.active">
          {{ tab.name }}
        </app-tab>
      }
    </div>
  `,
  standalone: true,
  imports: [TabComponent],
})
export class TabsComponent {
  public tabs = input.required<Tab[]>();
  public tabsWithIndex = computed(() => this.getTabsWithIndex());
  public onChangeTab = output<TabWithIndex>();

  private getTabsWithIndex() {
    const tabsWithIndex: TabWithIndex[] = [];
    let index = 0;

    this.tabs().forEach(tab => {
      tabsWithIndex.push({ ...tab, index: index });
      index++;
    });

    return tabsWithIndex;
  }

  public changeTab(tab: TabWithIndex) {
    this.tabsWithIndex().forEach(t =>
      // TODO доработать алгоритм
      t.active ? (t.active = false) : (t.active = true)
    );

    this.onChangeTab.emit(tab);
  }
}
