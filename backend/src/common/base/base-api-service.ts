import { AbstractApiService } from '../abstract/abstract-api-service';
import { Repository } from '../interfaces/Repository';

export class BaseApiService<T, Y> extends AbstractApiService<T, Y> {
  public constructor(protected repository: Repository<Y>) {
    super(repository);
  }
}
