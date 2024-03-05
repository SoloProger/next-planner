import { Component, OnInit } from '@angular/core';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';
import { CustomDate } from '@app/shared/utils/custom-date.util';
import { AccountComponent } from './widgets/account.component';

@Component({
  selector: 'app-navbar',
  template: `
    <nav appFlex justifyContent="space" extraStyles="bg-prime p-24">
      <div appFlex [gap]="8">
        <span class="regular text-bold">Дата:</span>
        <span class="regular text-bold">{{ today }}</span>
      </div>
      <app-account></app-account>
    </nav>
  `,
  standalone: true,
  imports: [FlexDirective, AccountComponent],
})
export class NavbarComponent implements OnInit {
  public today!: string;

  ngOnInit(): void {
    this.today = CustomDate.getLocaleDate();
  }
}
