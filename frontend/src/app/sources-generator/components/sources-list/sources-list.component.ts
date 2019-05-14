import { Component, OnInit } from '@angular/core';
import { SourcesGeneratorService } from '../../sources-generator.service';
import Author from '../../shared/models/author';
import { TYPES } from '../../shared/constants/sources';

@Component({
  selector: 'app-sources-list',
  templateUrl: './sources-list.component.html',
  styleUrls: ['./sources-list.component.scss']
})
export class SourcesListComponent implements OnInit {

  sources = [];
  public Types = TYPES;
  constructor(public service: SourcesGeneratorService) { }

  public makeCity = (city: string) => {
    switch (city) {
      case 'Москва':
        return 'M.';

      case 'Санкт-Петербург':
        return 'СПб.';

      default:
        return city;
    }
  }

  public getAuthors = (authors: Author[]) => authors.map((author, key) =>
    authors.length - 1 === key ?
      `${author.firstName[0]}.${author.middleName[0]}.${author.lastName}.` :
      `${author.firstName[0]}.${author.middleName[0]}.${author.lastName}, `)

  public getFirstAuthor = (authors) => `${authors[0].lastName}, ${authors[0].firstName[0]}.${authors[0].middleName[0]}`;

  ngOnInit() {
    this.sources = this.service.getSources();
  }

}
