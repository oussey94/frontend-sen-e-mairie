import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Acte_Naissance } from 'src/app/models/acte-naissance.model';
import { ActesNaissancesService } from 'src/app/services/actes-naissances.service';
import { EditActeNaissanceComponent } from '../edit-acte-naissance/edit-acte-naissance.component';

@Component({
  selector: 'app-list-actes-naissances',
  templateUrl: './list-actes-naissances.component.html',
  styleUrls: ['./list-actes-naissances.component.css']
})
export class ListActesNaissancesComponent implements OnDestroy,OnInit {
  
  dtOptions: DataTables.Settings = {};
  public naissances: Acte_Naissance[];
  dtTrigger: Subject<any> = new Subject<any>();

  constructor( 
    private naissanceServices: ActesNaissancesService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      //autoWidth: true,
     // dom: 'Bfrtip',
      //buttons: ['copy','csv','excel','pdf','print'],
      language: {
        processing: "Traitement en cours ...",
        lengthMenu: "Afficher _MENU_ lignes",
        zeroRecords: "Aucun résultat trouvé",
        emptyTable: "Aucune donnée disponible",
        info: "Lignes _START_ à _END_ sur _TOTAL_",
        infoEmpty: "Aucune ligne affichée",
        infoFiltered: "(Filtrer un maximum de_MAX_)",
        infoPostFix: "",
        search: "Chercher:",
        //url: "/assets/datatable-French.json",
        //infoThousands: ",",
        loadingRecords: "Chargement...",
        paginate: {
          first: "Premier", last: "Dernier", next: "Suivant", previous: "Précédent"
        },
        aria: {
          sortAscending: ": Trier par ordre croissant", sortDescending: ": Trier par ordre décroissant"
        }
      }
    };

    //pour le test sans API
    this.naissances = this.naissanceServices.listNaissance();
    this.dtTrigger.next(true);

    this.naissanceServices.getAllNaissances().subscribe(data =>{
      console.log("les Dataa",data);
      this.naissances = data;
      this.dtTrigger.next(true);
    });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
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

  updateActeDeNaissance(data: Acte_Naissance): void{
    const dialogRef = this.dialog.open(EditActeNaissanceComponent, {
      width: '2000px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.naissanceServices.updateNaiss(data);
        this.naissanceServices.updateNaissance(data.id,data).subscribe();
      }
    });
  }

}
