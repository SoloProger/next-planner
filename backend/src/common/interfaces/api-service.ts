export interface ApiService<Y, T> {
  get(): Promise<T[]>;

  getById(id: number): Promise<T>;

  post(body: Y): Promise<T>;

  put(id: number, body: Y): Promise<T>;

  delete(id: number): Promise<void>;
}
