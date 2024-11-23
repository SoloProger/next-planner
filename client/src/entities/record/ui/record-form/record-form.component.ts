import { Component, inject } from '@angular/core';
import { CustomFormBuilder } from '../../../../shared/lib/services/custom-form-builder.service';
import { Validators } from '@angular/forms';
import { RecordType } from '../../model/types/RecordType';
import { Option } from '../../../../shared/ui/select/model/types/option';
import { DialogRef } from '../../../../shared/ui/dialog/lib/utils/dialog-ref';

@Component({
  selector: 'app-record-form',
  templateUrl: 'record-form.component.html',
})
export class RecordFormComponent {
  public fb = inject(CustomFormBuilder);
  public dialogRef = inject(DialogRef);

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

  public onSubmit() {
    this.dialogRef.close(this.formGroup.value);
  }
}
