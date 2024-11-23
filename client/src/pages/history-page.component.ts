import { Component } from '@angular/core';
import { PageLayoutComponent } from '../widgets/layouts/page-layout/ui/page-layout.component';
import { RecordModule } from '../entities/record/record.module';

@Component({
  selector: 'app-history-page',
  template: `
    <app-page-layout title="История записей">
      <app-records-history></app-records-history>
    </app-page-layout>
  `,
  standalone: true,
  imports: [PageLayoutComponent, RecordModule],
})
export class HistoryPageComponent {}
