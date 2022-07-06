import { Acte_Mariage } from './../../models/acte-mariage.model';
import { Component, OnInit } from '@angular/core';
import { ActesMariagesService } from 'src/app/services/actes-mariages.service';

@Component({
  selector: 'app-list-actes-mariages',
  templateUrl: './list-actes-mariages.component.html',
  styleUrls: ['./list-actes-mariages.component.css']
})
export class ListActesMariagesComponent implements OnInit {

  public mariages: Acte_Mariage[];

  constructor( private mariageService: ActesMariagesService) { }

  ngOnInit(): void {
    //Juste pour le test avant d'avoir l'API
    this.mariages = this.mariageService.listMariage();

    this.mariageService.getAllMariages().subscribe( data => {
      console.log("les data: ",data);
      this.mariages = data;
    });
  }

  supprimerMariage(mariage : Acte_Mariage) : void{
    let conf = confirm("Etes vous certains de vouloir supprimé l'acte de naissance ??");
    if(conf){
      this.mariageService.deleteMariage(mariage.id).subscribe(() =>{
        this.supprimerMariageDuTableau(mariage);
      });
    }
  }

  supprimerMariageDuTableau(mariage : Acte_Mariage) : void{
    this.mariages.forEach((curr, index) =>{
      if(mariage.id === curr.id){
        this.mariages.splice(index, 1);
      }
    });
  }

}
