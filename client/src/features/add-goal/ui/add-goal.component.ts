import { Component, inject } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { DialogService } from '../../../shared/ui/dialog/services/dialog.service';
import { InvoiceModule } from '../../../entities/invoice/invoice.module';
import { GoalFormComponent } from '../../../entities/goal/ui/goal-form/goal-form.component';
import { BaseStrapiApiService } from '../../../shared/api/services/base-strapi-api.service';
import { Goal } from '../../../entities/goal/model/types/Goal';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add-goal',
  template: `
    <div
      class="p-16 border-radius-2 pointer wp-200 hp-180 flex ai-center jc-center border-radius-8 gap-8 bg-stroke"
      (click)="addGoal()">
      <img src="/img/add.svg" alt="icon" class="h-48 w-48" />
    </div>
  `,
  standalone: true,
  imports: [SlicePipe, InvoiceModule],
})
export class AddGoalComponent {
  public dialog = inject(DialogService);
  public api: BaseStrapiApiService<Goal, { data: Goal }> =
    inject(BaseStrapiApiService);

  public addGoal() {
    this.dialog
      .openDialog(GoalFormComponent, {
        title: 'Добавить цель',
      })
      .afterClosed.pipe(
        switchMap(formData => this.api.post('goals', { data: formData }))
      )
      .subscribe();
  }
}
