import { Component, inject } from '@angular/core';
import { CustomFormBuilder } from '../../../../shared/lib/services/custom-form-builder.service';
import { Validators } from '@angular/forms';
import { DialogRef } from '../../../../shared/ui/dialog/lib/utils/dialog-ref';

@Component({
  selector: 'app-goal-form',
  templateUrl: 'goal-form.component.html',
})
export class GoalFormComponent {
  public fb = inject(CustomFormBuilder);

  private dialogRef = inject(DialogRef);

  public formGroup = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    currentAmount: ['', Validators.required],
    totalAmount: ['', Validators.required],
  });

  public onSubmit(): void {
    this.dialogRef.close(this.formGroup.value);
  }
}
