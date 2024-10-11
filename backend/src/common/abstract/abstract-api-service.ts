import { Repository } from '../interfaces/Repository';
import { ApiService } from '../interfaces/api-service';

export abstract class AbstractApiService<Y, T> implements ApiService<Y, T> {
  protected constructor(protected repository: Repository<T>) {
  }


  public async get(): Promise<T[]> {
    const entities = await this.repository.many();
    if (!entities) {
      throw `Данные не найдены`;
    }

    return entities;
  }

  public async getById(id: number, entityName = 'cущность'): Promise<T> {
    const entity = await this.repository.one(id);
    if (!entity) {
      throw `Данный(ая) ${entityName} не найден(а)`;
    }

    return entity;
  }

  public async post(body: Y): Promise<T> {
    return await this.repository.addEntityToDB(body);
  }

  public async put(id: number, body: Y): Promise<T> {
    return await this.repository.update(id, body);
  }

  public async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
