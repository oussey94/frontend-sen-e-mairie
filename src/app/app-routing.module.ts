import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListActesDecesComponent } from './components/list-actes-deces/list-actes-deces.component';
import { ListActesMariagesComponent } from './components/list-actes-mariages/list-actes-mariages.component';
import { ListActesNaissancesComponent } from './components/list-actes-naissances/list-actes-naissances.component';

const routes: Routes = [
  {path: "mariages", component: ListActesMariagesComponent},
  {path: "deces", component: ListActesDecesComponent},
  {path: "naissances", component: ListActesNaissancesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
