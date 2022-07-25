import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import {MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeddingComponent } from './components/wedding/wedding.component';
import { ListActesNaissancesComponent } from './components/list-actes-naissances/list-actes-naissances.component';
import { ListActesMariagesComponent } from './components/list-actes-mariages/list-actes-mariages.component';
import { ListActesDecesComponent } from './components/list-actes-deces/list-actes-deces.component';
import { AddActeNaissanceComponent } from './components/add-acte-naissance/add-acte-naissance.component';
import { AddActeDeceComponent } from './components/add-acte-dece/add-acte-dece.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditActeNaissanceComponent } from './components/edit-acte-naissance/edit-acte-naissance.component';

registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    WeddingComponent,
    ListActesNaissancesComponent,
    ListActesMariagesComponent,
    ListActesDecesComponent,
    AddActeNaissanceComponent,
    AddActeDeceComponent,
    EditActeNaissanceComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditActeNaissanceComponent]
})
export class AppModule { }
