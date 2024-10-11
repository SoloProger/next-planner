import { ApiService } from '../interfaces/api-service';
import { Repository } from '../interfaces/Repository';
import { BaseRepository } from './base-repository';
import { BaseApiService } from './base-api-service';
import { EntityTarget } from 'typeorm';

export class BaseHandlerService<Y, T, E extends T> {
  public readonly api: ApiService<Y, T>;
  private readonly baseRepository: Repository<E>;

  protected constructor(protected readonly entity: EntityTarget<E>) {
    this.baseRepository = new BaseRepository<E>(entity);
    this.api = new BaseApiService<Y, T>(this.baseRepository);
  }
}
