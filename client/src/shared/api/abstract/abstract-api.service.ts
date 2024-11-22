import {ApiService} from "../../model/types/ApiService";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


export abstract class AbstractApiService<T, Y> implements ApiService<T, Y> {

  protected constructor(protected http: HttpClient) {
  }

  public getAll(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${environment.apiUrl}/${endpoint}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzMxNDM5MTY2LCJleHAiOjE3MzQwMzExNjZ9.mIeI5JJcQNSOxHJHFNi6S-Q_ogBdgvVkusMRLvmXucQ"
      }
    })
  }

  public getOne(endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(`${environment.apiUrl}/${endpoint}/${id}`)
  }

  public post(endpoint: string, data: Y): Observable<T> {
    return this.http.post<T>(`${environment.apiUrl}/${endpoint}`, data, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzMxNDM5MTY2LCJleHAiOjE3MzQwMzExNjZ9.mIeI5JJcQNSOxHJHFNi6S-Q_ogBdgvVkusMRLvmXucQ"
      }
    })
  }

  public put(endpoint: string, id: number, data: Y): Observable<T> {
    return this.http.put<T>(`${environment.apiUrl}/${endpoint}/${id}`, data)
  }


  public delete(endpoint: string, id: number): Observable<T> {
    return this.http.delete<T>(`${environment.apiUrl}/${endpoint}/${id}`)
  }
}
