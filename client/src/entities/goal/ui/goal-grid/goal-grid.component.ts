import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { GoalHandlerService } from '../../model/services/goal-handler.service';

@Component({
  selector: 'app-goal-grid',
  template: `
    <section class="flex ai-center wi-100 gap-24 wrap">
      @for (goal of goals(); track goal.id) {
        <app-goal-card
          [name]="goal.attributes.name"
          [description]="goal.attributes.description"
          [totalAmount]="goal.attributes.totalAmount"
          [currentAmount]="goal.attributes.currentAmount"></app-goal-card>
      }
      <ng-content></ng-content>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalGridComponent implements OnInit {
  public handler = inject(GoalHandlerService);

  public goals = computed(() => this.handler.state.entities());

  ngOnInit() {
    this.handler.getGoals();
  }
}
