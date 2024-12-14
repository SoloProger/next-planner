import { Component, inject, OnInit } from '@angular/core';
import { CustomFormBuilder } from '../../../../shared/lib/services/custom-form-builder.service';
import { Validators } from '@angular/forms';
import { DialogRef } from '../../../../shared/ui/dialog/lib/utils/dialog-ref';
import { DialogConfig } from '../../../../shared/ui/dialog/lib/configs/dialog.config';

@Component({
  selector: 'app-category-form',
  templateUrl: 'category-form.component.html',
})
export class CategoryFormComponent implements OnInit {
  public fb = inject(CustomFormBuilder);
  public dialogRef = inject(DialogRef);
  public dialogData = inject(DialogConfig);

  public formGroup = this.fb.group({
    name: [null, Validators.required],
    description: [null],
  });

  ngOnInit() {
    this.formGroup.patchValue(this.dialogData.data);
  }

  public onSubmit(): void {
    if (!this.dialogData.isEditing) {
      this.dialogRef.close(this.formGroup.value);
    } else {
      this.dialogRef.close({
        formData: this.formGroup.value,
        id: this.dialogData.data.id,
      });
    }
  }
}
