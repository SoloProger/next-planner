import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../model/types/ApiService';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { EntitiesDataModel } from '../../model/types/EntitiesDataModel';
import { EntityDataModel } from '../../model/types/EntityDataModel';

@Injectable({ providedIn: 'root' })
export class BaseStrapiApiService<T, Y>
  implements ApiService<EntitiesDataModel<T> | EntityDataModel<T>, Y>
{
  constructor(protected http: HttpClient) {}

  public getAll(endpoint: string): Observable<EntitiesDataModel<T>> {
    return this.http.get<EntitiesDataModel<T>>(
      `${environment.apiUrl}/${endpoint}`
    );
  }

  public getOne(endpoint: string, id: number): Observable<EntityDataModel<T>> {
    return this.http.get<EntityDataModel<T>>(
      `${environment.apiUrl}/${endpoint}/${id}`
    );
  }

  public post(endpoint: string, data: Y): Observable<EntityDataModel<T>> {
    return this.http.post<EntityDataModel<T>>(
      `${environment.apiUrl}/${endpoint}`,
      data
    );
  }

  public put(
    endpoint: string,
    id: number,
    data: Y
  ): Observable<EntityDataModel<T>> {
    return this.http.put<EntityDataModel<T>>(
      `${environment.apiUrl}/${endpoint}/${id}`,
      data
    );
  }

  public delete(endpoint: string, id: number): Observable<EntityDataModel<T>> {
    return this.http.delete<EntityDataModel<T>>(
      `${environment.apiUrl}/${endpoint}/${id}`
    );
  }
}
