import { Component, inject, OnInit } from '@angular/core';
import { CustomFormBuilder } from '../../../../shared/lib/services/custom-form-builder.service';
import { Validators } from '@angular/forms';
import { RecordType } from '../../model/types/RecordType';
import { Option } from '../../../../shared/ui/select/model/types/option';
import { DialogRef } from '../../../../shared/ui/dialog/lib/utils/dialog-ref';
import { DialogConfig } from '../../../../shared/ui/dialog/lib/configs/dialog.config';

@Component({
  selector: 'app-record-form',
  templateUrl: 'record-form.component.html',
})
export class RecordFormComponent implements OnInit {
  public fb = inject(CustomFormBuilder);
  public dialogRef = inject(DialogRef);
  public dialogData = inject(DialogConfig);

  public recordType: Option[] = [
    {
      name: RecordType.INCOME,
    },
    {
      name: RecordType.CONSUMPTION,
    },
  ];

  public formGroup = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    count: [null, [Validators.required]],
    recordType: [RecordType.INCOME, [Validators.required]],
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
