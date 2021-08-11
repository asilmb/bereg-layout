import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
  public getItem(itemName: string): string|null {
    return localStorage.getItem(itemName);
  }
  public removeItem(itemName: string): void {
    localStorage.removeItem(itemName);
  }
  public cleanStorage(): void {
    localStorage.clear();
  }
}
