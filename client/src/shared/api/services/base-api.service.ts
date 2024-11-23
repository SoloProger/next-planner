import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AbstractApiService } from '../abstract/abstract-api.service';

@Injectable({ providedIn: 'root' })
export class BaseApiService<T, Y> extends AbstractApiService<T, Y> {
  constructor(protected override http: HttpClient) {
    super(http);
  }
}
