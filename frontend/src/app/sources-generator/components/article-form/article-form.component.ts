import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import Article from '../../shared/models/sources/article';
import Author from '../../shared/models/author';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
  public articleForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.articleForm = this.formBuilder.group({
      authors: this.formBuilder.array([
        this.initAuthor(),
      ]),
      name: [''],
      city: [''],
      publisher: [''],
      year: [''],
      pages: [''],
    });
  }

  public save(model: Article): void {
    console.log(model);
  }

  public addAuthor(): void {
    const control = this.articleForm.get('authors') as FormArray;
    control.push(this.initAuthor());
  }

  public removeAuthor(index: number): void {
    const control = this.articleForm.get('authors') as FormArray;
    control.removeAt(index);
  }

  private initAuthor(): FormGroup {
    return this.formBuilder.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
    });
  }
}
