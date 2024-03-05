import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexDirective } from '@app/shared/directives/flex/flex.directive';
import { CheckCardComponent } from './cards/check-card/check-card.component';
import { ValutesCardComponent } from './cards/valutes-card/valutes-card.component';

@NgModule({
  declarations: [CheckCardComponent, ValutesCardComponent],
  imports: [CommonModule, FlexDirective],
  exports: [CheckCardComponent, ValutesCardComponent],
})
export class HomeModule {}
