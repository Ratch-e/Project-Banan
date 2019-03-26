import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private version = '0.5';

  getVersion(): string {
    return this.version;
  }

  constructor() { }
}
