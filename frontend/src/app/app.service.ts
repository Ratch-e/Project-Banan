import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private version = '0.1';

  getVersion(): string {
    return this.version;
  }

  constructor() { }
}
