import {Observable} from "rxjs";

export interface ApiService<T, Y> {
  getAll(endpoint: string): Observable<T | T[]>;

  getOne(endpoint: string, id: number): Observable<T>;

  post(endpoint: string, id: number, data: Y): Observable<T>;

  put(endpoint: string, id: number, data: Y): Observable<T>;

  delete(endpoint: string, id: number): Observable<T>;

}
