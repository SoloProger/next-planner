import { Component, input, output } from '@angular/core';
import { TableColumn } from '../../model/types/TableColumn';
import { EntityDataModel } from '../../model/types/EntityDataModel';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrl: 'table.component.scss',
  standalone: true,
})
export class TableComponent<T> {
  public columns = input.required<TableColumn[]>();
  public addNewEntityColspan = input.required<number>();
  public data = input<T>();
  public strapiData = input<EntityDataModel<any>[] | null>();
  public rowClicked = output<EntityDataModel<any>>();
  public addNewEntity = output<void>();
}
