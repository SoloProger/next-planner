import { NgModule } from '@angular/core';
import { GoalCardComponent } from './ui/goal-card/goal-card.component';
import { GoalGridComponent } from './ui/goal-grid/goal-grid.component';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../shared/ui/pogress-bar/progress-bar.component';
import { GoalFormComponent } from './ui/goal-form/goal-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/ui/input/input.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { GoalStateService } from './model/services/goal-state.service';
import { GoalHandlerService } from './model/services/goal-handler.service';
import { BaseApiService } from '../../shared/api/services/base-api.service';
import { BaseStrapiApiService } from '../../shared/api/services/base-strapi-api.service';
import { BaseStateService } from '../../shared/model/services/base-state.service';

@NgModule({
  imports: [
    CommonModule,
    ProgressBarComponent,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
  exports: [GoalGridComponent],
  declarations: [GoalGridComponent, GoalCardComponent, GoalFormComponent],
  providers: [
    GoalStateService,
    GoalHandlerService,
    BaseStateService,
    { provide: BaseApiService, useClass: BaseStrapiApiService },
  ],
})
export class GoalModule {}
