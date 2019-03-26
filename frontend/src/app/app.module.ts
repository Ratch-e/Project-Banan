import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SourcesGeneratorModule } from './sources-generator/sources-generator.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SourcesGeneratorContainerComponent } from './sources-generator/components/sources-generator-container/sources-generator-container.component';
import { SourcesListComponent } from './sources-generator/components/sources-list/sources-list.component';
import { CardComponent } from './ui/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SourcesGeneratorContainerComponent,
    CardComponent,
    SourcesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SourcesGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
