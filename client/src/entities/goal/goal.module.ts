import { NgModule } from '@angular/core';
import { GoalCardComponent } from './ui/goal-card/goal-card.component';
import { GoalGridComponent } from './ui/goal-grid/goal-grid.component';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../shared/ui/pogress-bar/progress-bar.component';
import { GoalFormComponent } from './ui/goal-form/goal-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/ui/input/input.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

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
  providers: [],
})
export class GoalModule {}
