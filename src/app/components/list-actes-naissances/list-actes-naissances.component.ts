import { Component, OnInit } from '@angular/core';
import { Acte_Naissance } from 'src/app/models/acte-naissance.model';
import { ActesNaissancesService } from 'src/app/services/actes-naissances.service';

@Component({
  selector: 'app-list-actes-naissances',
  templateUrl: './list-actes-naissances.component.html',
  styleUrls: ['./list-actes-naissances.component.css']
})
export class ListActesNaissancesComponent implements OnInit {

  public naissances: Acte_Naissance[];

  constructor( private naissanceServices: ActesNaissancesService) { }

  ngOnInit(): void {
    //pour le test sans API
    this.naissances = this.naissanceServices.listNaissance();

    this.naissanceServices.getAllNaissances().subscribe(data =>{
      console.log("les Dataa",data);
      this.naissances = data;
    })
  }

  supprimerNaissance(naissance: Acte_Naissance): void{
    let conf = confirm("Etes vous certains de vouloir supprimé l'acte de naissance ??");
    if(conf){
      this.naissanceServices.deleteNaissance(naissance.id).subscribe(() =>{
        this.supprimerNaissanceDuTableau(naissance);
      })
    }
  }

  supprimerNaissanceDuTableau(naissance: Acte_Naissance): void{
    this.naissances.forEach((curr, index) =>{
      if(naissance.id === curr.id){
        this.naissances.splice(index, 1);
      }
    });
  }

}
