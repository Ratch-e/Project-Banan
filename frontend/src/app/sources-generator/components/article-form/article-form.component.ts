import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SourcesGeneratorService } from '../../sources-generator.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['../new-source/new-source.component.scss']
})
export class ArticleFormComponent implements OnInit {
  public articleForm: FormGroup;
  public authorsDeletable: boolean;

  constructor(private formBuilder: FormBuilder, public service: SourcesGeneratorService) { }

  ngOnInit() {
    this.resetForm();
  }

  private resetForm = () => {
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
    this.checkDeletable([]);
  }

  public save(form: FormGroup): void {
    this.service.addSource(form.value);
    this.resetForm();
  }

  public addAuthor = (): void => {
    const control = this.articleForm.get('authors') as FormArray;
    control.push(this.initAuthor());
    this.checkDeletable(control);
  }

  public removeAuthor = (index: number): void => {
    const control = this.articleForm.get('authors') as FormArray;
    control.removeAt(index);
    this.checkDeletable(control);
  }

  private checkDeletable = (control) => {
    this.authorsDeletable = control.length > 1;
  }

  private initAuthor(): FormGroup {
    return this.formBuilder.group({
      firstName: [''],
      middleName: [''],
      lastName: [''],
    });
  }
}
