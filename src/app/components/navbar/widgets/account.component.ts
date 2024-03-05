import { Component } from '@angular/core';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-account',
  template: `
    <div
      (click)="accountMenu.toggle($event)"
      class="p-x-15 p-y-8 pointer hover-bg-light border-radius-4 trans-1"
    >
      <span>User Name</span>
    </div>
    <p-overlayPanel #accountMenu>
      <div appFlex direction="column" extraStyles="p-16" [gap]="16">
        <div appFlex [gap]="8">
          <i class="pi pi-user"></i>
          <span class="pointer">Профиль</span>
        </div>
        <div appFlex [gap]="8">
          <i class="pi pi-sign-out"></i>
          <span class="pointer">Выход</span>
        </div>
      </div>
    </p-overlayPanel>
  `,
  standalone: true,
  imports: [OverlayPanelModule, FlexDirective],
})
export class AccountComponent {}
