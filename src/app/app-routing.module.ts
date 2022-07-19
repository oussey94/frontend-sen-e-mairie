import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListNaissanceComponent } from './list-naissance/list-naissance.component';

const routes: Routes = [
  { path: 'listeN',       component: ListNaissanceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

