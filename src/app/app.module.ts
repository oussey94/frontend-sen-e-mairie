import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { ListActesNaissancesComponent } from './components/list-actes-naissances/list-actes-naissances.component';
import { ListActesMariagesComponent } from './components/list-actes-mariages/list-actes-mariages.component';
import { ListActesDecesComponent } from './components/list-actes-deces/list-actes-deces.component';

@NgModule({
  declarations: [
    AppComponent,
    WeddingComponent,
    ListActesNaissancesComponent,
    ListActesMariagesComponent,
    ListActesDecesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
