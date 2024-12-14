import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
} from '@angular/core';
import { GoalHandlerService } from '../../model/services/goal-handler.service';
import { Goal } from '../../model/types/Goal';
import { DialogService } from '../../../../shared/ui/dialog/services/dialog.service';
import { GoalFormComponent } from '../goal-form/goal-form.component';

@Component({
  selector: 'app-goal-grid',
  template: `
    <section class="flex ai-center wi-100 gap-24 wrap">
      @for (goal of goals(); track goal.id) {
        <app-goal-card
          [name]="goal.attributes.name"
          [description]="goal.attributes.description"
          [totalAmount]="goal.attributes.totalAmount"
          [currentAmount]="goal.attributes.currentAmount"
          (edit)="editGoal($event, goal.id)"></app-goal-card>
      }
      <ng-content></ng-content>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalGridComponent implements OnInit {
  public handler = inject(GoalHandlerService);
  public dialog = inject(DialogService);

  public goals = computed(() => this.handler.state.entities());

  ngOnInit() {
    this.handler.getGoals();
  }

  public editGoal(goal: Goal | null, id?: number): void {
    this.dialog
      .openDialog(GoalFormComponent, {
        title: 'Изменить цель',
        data: { ...goal, id },
        isEditing: true,
      })
      .afterClosed.subscribe(formData => {
        this.handler.updateGoal(formData.id, { data: formData.formData });
      });
  }
}
