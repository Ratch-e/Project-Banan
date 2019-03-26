import { Injectable } from '@angular/core';
import Article from './shared/models/sources/article';

@Injectable({
  providedIn: 'root'
})
export class SourcesGeneratorService {
  private sources: Array<Article> = [];

  getSources(): Array<object> {
    return this.sources;
  }

  addSource(source): void {
    this.sources.push(source);
  }

  constructor() { }
}
