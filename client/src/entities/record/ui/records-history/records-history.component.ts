import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Record} from "../../model/types/Record";
import {BaseStrapiApiService} from "../../../../shared/api/services/base-strapi-api.service";
import {EntityDataModel} from "../../../../shared/model/types/EntityDataModel";
import {tableColumns} from "../../constants/tableColumns";
import {Router} from "@angular/router";

@Component({
  selector: 'app-records-history',
  templateUrl: 'records-history.component.html'
})

export class RecordsHistoryComponent implements OnInit {

  public tableColumns = tableColumns;

  public records$: BehaviorSubject<EntityDataModel<Record>[]> = new BehaviorSubject<EntityDataModel<Record>[]>(
    []
  );

  constructor(
    private router: Router,
    private apiService: BaseStrapiApiService<Record, Record>) {
  }

  ngOnInit() {
    this.apiService.getAll("records").subscribe((records) => this.records$.next(records.data))
  }

  public navigateToDetailPage(id?: number) {
    this.router.navigate([`/detail-record/${id}`]);
  }

}
