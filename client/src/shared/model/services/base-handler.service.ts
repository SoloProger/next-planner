import { inject, Injectable } from '@angular/core';
import { BaseApiService } from '../../api/services/base-api.service';
import { API_ENDPOINT } from '../../lib/tokens/api-endpoint.token';
import { BaseStateService } from './base-state.service';
import { ApiService } from '../types/ApiService';

@Injectable()
export class BaseHandlerService<T, Y> {
  private api: ApiService<T, Y> = inject(BaseApiService);
  public state: BaseStateService<T> = inject(BaseStateService);
  public endpoint = inject(API_ENDPOINT);

  public get(): void {
    this.api.getAll(this.endpoint).subscribe(entities => {
      this.state.setEntities(entities);
    });
  }
}
