import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public setItems(values: string[]) {
    Object.entries(values).forEach(([key, value]) => this.setItem(key, value));
  }

  public getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  public getObjectItem<T>(key: string): T {
    return this.getItem(key) && JSON.parse(localStorage.getItem(key) as string);
  }

  public setObjectItem<T>(key: string, value: T): void {
    this.setItem(key, JSON.stringify(value));
  }
}
