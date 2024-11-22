import { Component, OnInit } from '@angular/core';
import { PageLayoutComponent } from '../widgets/layouts/page-layout/ui/page-layout.component';
import { RecordModule } from '../entities/record/record.module';

@Component({
  selector: 'app-record-detail-page',
  template: `
    <app-page-layout title="Детали записи">
      <app-record-detail></app-record-detail>
    </app-page-layout>
  `,
  standalone: true,
  imports: [PageLayoutComponent, RecordModule],
})
export class RecordDetailPageComponent {}
