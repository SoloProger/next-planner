import { Component, inject, OnInit, signal } from '@angular/core';
import { Record } from '../../model/types/Record';
import { BaseStrapiApiService } from '../../../../shared/api/services/base-strapi-api.service';
import { EntityDataModel } from '../../../../shared/model/types/EntityDataModel';
import { tableColumns } from '../../constants/tableColumns';
import { DialogService } from '../../../../shared/ui/dialog/services/dialog.service';
import { RecordFormComponent } from '../record-form/record-form.component';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-records-history',
  templateUrl: 'records-history.component.html',
})
export class RecordsHistoryComponent implements OnInit {
  public api: BaseStrapiApiService<Record, { data: Record }> =
    inject(BaseStrapiApiService);

  public dialog = inject(DialogService);

  public tableColumns = tableColumns;

  public records = signal<EntityDataModel<Record>[]>([]);

  ngOnInit() {
    this.api
      .getAll('records')
      .subscribe(records => this.records.set(records.data));
  }

  public addNewRecord(): void {
    this.dialog
      .openDialog(RecordFormComponent, {
        title: 'Добавить новую запись',
      })
      .afterClosed.pipe(
        switchMap(formData => this.api.post('records', { data: formData }))
      )
      .subscribe(record => {
        const _record = record as unknown as { data: EntityDataModel<Record> };
        this.records.update(records => [...records, _record.data]);
      });
  }

  public editRecord(record: EntityDataModel<Record> | null): void {
    this.dialog
      .openDialog(RecordFormComponent, {
        title: 'Изменить запись',
        data: { ...record?.attributes, id: record?.id },
        isEditing: true,
      })
      .afterClosed.pipe(
        switchMap(formData =>
          this.api.put('records', formData.id, { data: formData.formData })
        )
      )
      .subscribe(record => {
        const _record = record as unknown as { data: EntityDataModel<Record> };
        this.records.update(records => [...records, _record.data]);
      });
  }
}
