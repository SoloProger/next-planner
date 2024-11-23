import { NgModule } from '@angular/core';
import { RecordsHistoryComponent } from './ui/records-history/records-history.component';
import { CommonModule } from '@angular/common';
import { RecordDetailComponent } from './ui/record-detail/record-detail.component';
import { TableComponent } from '../../shared/ui/table/table.component';
import { RecordFormComponent } from './ui/record-form/record-form.component';
import { DialogService } from '../../shared/ui/dialog/services/dialog.service';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../shared/ui/input/input.component';
import { SelectComponent } from '../../shared/ui/select/ui/select/select.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    TableComponent,
    ReactiveFormsModule,
    InputComponent,
    SelectComponent,
    ButtonComponent,
  ],
  exports: [RecordsHistoryComponent, RecordDetailComponent],
  declarations: [
    RecordsHistoryComponent,
    RecordDetailComponent,
    RecordFormComponent,
  ],
  providers: [DialogService],
})
export class RecordModule {}
