import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {NewSourceComponent} from './components/new-source/new-source.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';

@NgModule({
  declarations: [
    NewSourceComponent,
    ArticleFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NewSourceComponent]
})
export class SourcesGeneratorModule { }
