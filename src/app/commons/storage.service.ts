import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setItem(key: string, value: string): void {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(key, value);
    }
  }

  getItem(key: string): string | null {
    try {
      return sessionStorage.getItem(key);
    }catch (e){
      return null;
    }
  }

  clear(): void {
    if (typeof window !== 'undefined') {
      sessionStorage.clear();
    }
  }
}
