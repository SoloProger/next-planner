import { Repository } from '../interfaces/Repository';
import { EntityTarget, FindManyOptions, FindOptionsWhere, ObjectLiteral } from 'typeorm';
import { Database } from '../../config/database';

export class AbstractRepository<T> implements Repository<T> {

  protected constructor(protected readonly entity: EntityTarget<T>) {
  }


  public async one(filterValue: unknown, filter = 'id', relationOptions?: any) {
    try {
      const entity = await Database.repository(this.entity).findOne({
        where: { [filter]: filterValue } as FindOptionsWhere<T>,
        relations: relationOptions,
      });
      return entity as T;
    } catch (error) {
      this.exception(error);
    }
  }

  public async many(relationEntity?: string, options?: FindManyOptions) {
    if (relationEntity) {
      options.relations = { [relationEntity]: true };
    }
    try {
      const entities = await Database.repository(this.entity).find(options);
      return entities as T[];
    } catch (error) {
      this.exception(error);
    }
  }

  public async addEntityToDB<Y>(requestBody: Y): Promise<T> {
    try {
      const entity = Database.repository(this.entity).create(requestBody as any);
      await Database.repository(this.entity).save(entity);
      return entity as T;
    } catch (error) {
      this.exception(error);
    }
  }

  public async update<Y>(id: number, requestBody: Y, relationEntity?: string) {
    try {
      await Database.repository(this.entity).update(id, requestBody as any);
      if (relationEntity) {
        return await this.one(id, 'id', { [relationEntity]: true });
      } else {
        return await this.one(id, 'id');
      }
    } catch (error) {
      this.exception(error);
    }
  }

  public async delete(id: number, returnEntity = false) {
    try {
      if (returnEntity) {
        await Database.repository(this.entity).delete(id);
        return await this.one(id);
      } else {
        await Database.repository(this.entity).delete(id);
      }
    } catch (error) {
      this.exception(error);
    }
  }


  protected createObjectInstance<Y>(requestBody: Y): T {
    const entity = Database.repository(this.entity).create(requestBody as any);
    return entity as T;
  }

  protected async save(entity: T): Promise<T> {
    return await Database.repository(this.entity).save(entity);
  }

  private exception(error: unknown) {
    throw {
      message: `Непредвиденная ошибка: ${error}`,
      status: 400,
    };
  }


}
