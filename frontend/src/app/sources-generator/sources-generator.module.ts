import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { NewSourceComponent } from './components/new-source/new-source.component';
import { AuthorFormComponent } from './components/author-form/author-form.component';

@NgModule({
  declarations: [NewSourceComponent, AuthorFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NewSourceComponent]
})
export class SourcesGeneratorModule { }
