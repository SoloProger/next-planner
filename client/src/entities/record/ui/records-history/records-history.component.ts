import { Component, inject, OnInit, signal } from '@angular/core';
import { Record } from '../../model/types/Record';
import { EntityDataModel } from '../../../../shared/model/types/EntityDataModel';
import { tableColumns } from '../../constants/tableColumns';
import { DialogService } from '../../../../shared/ui/dialog/services/dialog.service';
import { RecordFormComponent } from '../record-form/record-form.component';
import { switchMap } from 'rxjs';
import { BaseApiService } from '../../../../shared/api/services/base-api.service';
import { ApiService } from '../../../../shared/model/types/ApiService';

@Component({
  selector: 'app-records-history',
  templateUrl: 'records-history.component.html',
})
export class RecordsHistoryComponent implements OnInit {
  public api: ApiService<Record, { data: Record }> = inject(BaseApiService);

  public dialog = inject(DialogService);

  public tableColumns = tableColumns;

  public records = signal<Record[]>([]);

  ngOnInit() {
    this.api.getAll('record').subscribe(records => this.records.set(records));
  }

  public addNewRecord(): void {
    this.dialog
      .openDialog(RecordFormComponent, {
        title: 'Добавить новую запись',
      })
      .afterClosed.pipe(
        switchMap(formData => this.api.post('record', formData))
      )
      .subscribe(record => {
        this.records.update(records => [...records, record]);
      });
  }

  public editRecord(record: EntityDataModel<Record> | null): void {
    this.dialog
      .openDialog(RecordFormComponent, {
        title: 'Изменить запись',
        data: { ...record, id: record?.id },
        isEditing: true,
      })
      .afterClosed.pipe(
        switchMap(formData =>
          this.api.put('record', formData.id, formData.formData)
        )
      )
      .subscribe(record => {
        this.records.update(records => [...records, record]);
      });
  }
}
