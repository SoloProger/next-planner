import { Component, inject, OnInit } from '@angular/core';
import { CustomFormBuilder } from '../../../../shared/lib/services/custom-form-builder.service';
import { Validators } from '@angular/forms';
import { DialogRef } from '../../../../shared/ui/dialog/lib/utils/dialog-ref';
import { DialogConfig } from '../../../../shared/ui/dialog/lib/configs/dialog.config';

@Component({
  selector: 'app-goal-form',
  templateUrl: 'goal-form.component.html',
})
export class GoalFormComponent implements OnInit {
  public fb = inject(CustomFormBuilder);

  private dialogRef = inject(DialogRef);
  public dialogData = inject(DialogConfig);

  public formGroup = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    currentAmount: ['', Validators.required],
    totalAmount: ['', Validators.required],
  });

  ngOnInit(): void {
    console.log(this.dialogData);
  }

  public onSubmit(): void {
    this.dialogRef.close(this.formGroup.value);
  }
}
