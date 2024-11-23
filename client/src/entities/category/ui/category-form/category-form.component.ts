import { Component, inject } from '@angular/core';
import { CustomFormBuilder } from '../../../../shared/lib/services/custom-form-builder.service';
import { Validators } from '@angular/forms';
import { DialogRef } from '../../../../shared/ui/dialog/lib/utils/dialog-ref';

@Component({
  selector: 'app-category-form',
  templateUrl: 'category-form.component.html',
})
export class CategoryFormComponent {
  public fb = inject(CustomFormBuilder);
  public dialogRef = inject(DialogRef);

  public formGroup = this.fb.group({
    name: [null, Validators.required],
    description: [null],
  });

  public onSubmit(): void {
    this.dialogRef.close(this.formGroup.value);
  }
}
