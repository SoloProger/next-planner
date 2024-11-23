import { NgModule } from '@angular/core';
import { GoalCardComponent } from './ui/goal-card/goal-card.component';
import { GoalGridComponent } from './ui/goal-grid/goal-grid.component';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from '../../shared/ui/pogress-bar/progress-bar.component';

@NgModule({
  imports: [CommonModule, ProgressBarComponent],
  exports: [GoalGridComponent],
  declarations: [GoalGridComponent, GoalCardComponent],
  providers: [],
})
export class GoalModule {}
