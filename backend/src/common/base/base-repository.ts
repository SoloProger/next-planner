import { AbstractRepository } from '../abstract/abstract-repository';
import { EntityTarget } from 'typeorm';

export class BaseRepository<T> extends AbstractRepository<T> {
  public constructor(protected readonly entity: EntityTarget<T>) {
    super(entity);
  }
}
