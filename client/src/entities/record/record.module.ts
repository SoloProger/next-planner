import {NgModule} from '@angular/core';
import {RecordsHistoryComponent} from "./ui/records-history/records-history.component";
import {CommonModule} from "@angular/common";
import {RecordDetailComponent} from "./ui/record-detail/record-detail.component";


@NgModule({
  imports: [CommonModule],
  exports: [RecordsHistoryComponent, RecordDetailComponent],
  declarations: [RecordsHistoryComponent, RecordDetailComponent],
  providers: [],
})
export class RecordModule {
}
