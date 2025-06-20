import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { DialogService } from '../../../shared/ui/dialog/services/dialog.service';
import { GoalFormComponent } from '../../../entities/goal/ui/goal-form/goal-form.component';
import { GoalModule } from '../../../entities/goal/goal.module';
import { DialogModule } from '../../../shared/ui/dialog/dialog.module';
import { GoalHandlerService } from '../../../entities/goal/model/services/goal-handler.service';

@Component({
  selector: 'app-add-goal',
  template: `
    <div
      class="p-16 border-radius-2 pointer wp-300 hp-142 flex ai-center jc-center border-radius-8 gap-8 bg-stroke"
      (click)="addGoal()">
      <img src="/img/add.svg" alt="icon" class="h-48 w-48" />
    </div>
  `,
  standalone: true,
  imports: [SlicePipe, GoalModule, DialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddGoalComponent {
  public dialog = inject(DialogService);

  public handler = inject(GoalHandlerService);

  public addGoal() {
    this.dialog
      .openDialog(GoalFormComponent, {
        title: 'Добавить цель',
      })
      .afterClosed.subscribe(formData => {
        this.handler.addGoal(formData);
      });
  }
}
