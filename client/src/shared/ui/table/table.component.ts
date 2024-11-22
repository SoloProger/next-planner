import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TableColumn } from '../../model/types/TableColumn';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrl: 'table.component.scss',
  standalone: true,
  imports: [AsyncPipe],
})
export class TableComponent<T> {
  @Input({ required: true }) columns!: TableColumn[];
  @Input() data?: T[];
  @Input() strapiData?: any[] | null;

  @Output() rowClicked = new EventEmitter<any>();
}
