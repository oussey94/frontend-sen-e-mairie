import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreerActNComponent } from './creer-act-n/creer-act-n.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListNaissanceComponent } from './list-naissance/list-naissance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
     MatInputModule,
    ReactiveFormsModule,
    // HttpClientModule,
    MatTableModule ,
    MatPaginatorModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonModule,
    MatTooltipModule,
    MatSortModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    CreerActNComponent,
    ListNaissanceComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
