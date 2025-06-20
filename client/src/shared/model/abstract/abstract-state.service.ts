import { computed, signal, WritableSignal } from '@angular/core';

type SelectCallback<T, Y> = (state: T) => Y;

/**
 *  Локальный стейт
 * */
export abstract class AbstractStateService<T> {
  private state: WritableSignal<T | null | Partial<T>> = signal(null);

  /**
   * Получение всего стейта
   * @return Signal<T>
   * */
  protected getState = computed(() => this.state());

  protected constructor(initialState: T) {
    this.state.set(initialState);
  }

  /**
   *
   * Получение слайса
   *
   * @param callback {SelectCallback}
   * @return Signal<Y>
   * */
  protected select<Y>(callback: SelectCallback<T | null | Partial<T>, Y>) {
    return computed(() => callback(this.state()));
  }

  protected setState(newState: Partial<T>): void {
    this.state.update(prevState => ({ ...prevState, ...newState }));
  }
}
