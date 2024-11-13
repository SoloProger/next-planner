import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {EntityDataModel} from "../../../../shared/model/types/EntityDataModel";
import {Record} from "../../model/types/Record";
import {BaseStrapiApiService} from "../../../../shared/api/services/base-strapi-api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-record-detail',
  templateUrl: 'record-detail.component.html'
})

export class RecordDetailComponent implements OnInit {
  public record$: BehaviorSubject<EntityDataModel<Record> | null> = new BehaviorSubject<EntityDataModel<Record> | null>(
    null
  );

  constructor(
    private route: ActivatedRoute,
    private apiService: BaseStrapiApiService<Record, Record>) {
  }

  ngOnInit() {
    this.apiService.getOne("records", this.route.snapshot.params['id']).subscribe((record) => this.record$.next(record))
  }
}
