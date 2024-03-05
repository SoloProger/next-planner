import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthRedirectStore {
  private isRedirect$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public redirect(): void {
    this.isRedirect$.next(!this.isRedirect$.value);
  }

  public getRedirectValue(): boolean {
    return this.isRedirect$.value;
  }
}
