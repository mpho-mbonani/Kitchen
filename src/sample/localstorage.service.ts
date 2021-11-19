import { Injectable, Inject } from '@angular/core';
import {LOCAL_STORAGE, SESSION_STORAGE, WebStorageService} from 'angular-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  private data: any = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }

  saveInLocal(key, val): void {
    this.storage.set(key, val);
    this.data[key] = this.storage.get(key);
  }

  getFromLocal(key): string {
    this.data[key] = this.storage.get(key);
    return this.data[key];
  }

  remove(key) {
    this.storage.remove(key);
  }
}
