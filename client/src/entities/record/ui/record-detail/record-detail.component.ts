import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Record } from '../../model/types/Record';
import { ActivatedRoute } from '@angular/router';
import { BaseApiService } from '../../../../shared/api/services/base-api.service';

@Component({
  selector: 'app-record-detail',
  templateUrl: 'record-detail.component.html',
})
export class RecordDetailComponent implements OnInit {
  public record$: BehaviorSubject<Record | null> =
    new BehaviorSubject<Record | null>(null);

  constructor(
    private route: ActivatedRoute,
    private apiService: BaseApiService<Record, Record>
  ) {}

  ngOnInit() {
    this.apiService
      .getOne('records', this.route.snapshot.params['id'])
      .subscribe(record => this.record$.next(record));
  }
}
