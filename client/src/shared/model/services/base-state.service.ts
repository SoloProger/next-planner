import { Injectable } from '@angular/core';
import { AbstractStateService } from '../abstract/abstract-state.service';

interface State<T> {
  entities: T[] | [];
  entity: T | null;
}

@Injectable()
export class BaseStateService<T> extends AbstractStateService<State<T>> {
  public entities = this.select(state => state?.entities);

  constructor() {
    super({
      entities: [],
      entity: null,
    });
  }

  public setEntities(entities: T[]) {
    this.setState({ entities });
  }

  public setEntity(entity: T) {
    this.setState({ entities: [...(this.entities() as []), entity] });
  }
}
