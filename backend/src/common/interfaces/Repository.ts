import { FindManyOptions } from 'typeorm';

export interface Repository<T> {
  one(filterValue: unknown, filter?: string, relationOptions?: any): Promise<T>;

  many(relationEntity?: string, options?: FindManyOptions): Promise<T[]>;

  addEntityToDB<Y>(requestBody: Y): Promise<T>;

  update<Y>(id: number, requestBody: Y, relationEntity?: string): Promise<T>;

  delete(id: number, returnEntity?: boolean): Promise<T>;

}
