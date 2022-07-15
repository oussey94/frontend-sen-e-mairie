import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddActeDeceComponent } from './components/add-acte-dece/add-acte-dece.component';
import { AddActeNaissanceComponent } from './components/add-acte-naissance/add-acte-naissance.component';
import { ListActesDecesComponent } from './components/list-actes-deces/list-actes-deces.component';
import { ListActesMariagesComponent } from './components/list-actes-mariages/list-actes-mariages.component';
import { ListActesNaissancesComponent } from './components/list-actes-naissances/list-actes-naissances.component';
import { WeddingComponent } from './components/wedding/wedding.component';

const routes: Routes = [
  //{path: "home", component: AppComponent},
  //{path: "**", redirectTo: "home", pathMatch: "full"},
  {path: "mariages", component: ListActesMariagesComponent},
  {path: "deces", component: ListActesDecesComponent},
  {path: "naissances", component: ListActesNaissancesComponent},
  {path: "add-naissance", component: AddActeNaissanceComponent},
  {path: "add-dece", component: AddActeDeceComponent},
  {path: "add-mariage", component: WeddingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
