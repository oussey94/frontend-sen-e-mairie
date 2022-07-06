import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acte_Mariage } from '../models/acte-mariage.model';

@Injectable({
  providedIn: 'root'
})
export class ActesMariagesService {

  public readonly url_acte_mariage:string='';

  mariages: Acte_Mariage[];

  

  constructor( private http: HttpClient ) {
    this.mariages = [
      { id: 1,
        num_acte: 2021,
        prenom_officier: "Weuzz",
        nom_officier: "Mbodji",
        prenom_marie: "Mbayeee",
        nom_marie: "Dieng",
        adress_marie: "Somone",
        prenom_pere_du_marie: "Goumm",
        prenom_maman_marie: "Asss",
        nom_maman_du_marie: "Diaaaa",
        prenom_fem: "Binnn",
        nom_fem: "Looooo",
        adress_fem: "Somone",
        prenom_pere_fem: "Paaaa",
        prenom_maman_fem: "Ndeyyyyy",
        nom_maman_fem: "Cisss",
        option: "Polyyy",
        regime_matrimoniale: "Séparation Bienn"
      },
      { id: 1,
        num_acte: 2021,
        prenom_officier: "Weuzz",
        nom_officier: "Mbodji",
        prenom_marie: "Mbayeee",
        nom_marie: "Dieng",
        adress_marie: "Somone",
        prenom_pere_du_marie: "Goumm",
        prenom_maman_marie: "Asss",
        nom_maman_du_marie: "Diaaaa",
        prenom_fem: "Binnn",
        nom_fem: "Looooo",
        adress_fem: "Somone",
        prenom_pere_fem: "Paaaa",
        prenom_maman_fem: "Ndeyyyyy",
        nom_maman_fem: "Cisss",
        option: "Polyyy",
        regime_matrimoniale: "Séparation Bienn"
      },
      { id: 1,
        num_acte: 2021,
        prenom_officier: "Weuzz",
        nom_officier: "Mbodji",
        prenom_marie: "Mbayeee",
        nom_marie: "Dieng",
        adress_marie: "Somone",
        prenom_pere_du_marie: "Goumm",
        prenom_maman_marie: "Asss",
        nom_maman_du_marie: "Diaaaa",
        prenom_fem: "Binnn",
        nom_fem: "Looooo",
        adress_fem: "Somone",
        prenom_pere_fem: "Paaaa",
        prenom_maman_fem: "Ndeyyyyy",
        nom_maman_fem: "Cisss",
        option: "Polyyy",
        regime_matrimoniale: "Séparation Bienn"
      },
      { id: 1,
        num_acte: 2021,
        prenom_officier: "Weuzz",
        nom_officier: "Mbodji",
        prenom_marie: "Mbayeee",
        nom_marie: "Dieng",
        adress_marie: "Somone",
        prenom_pere_du_marie: "Goumm",
        prenom_maman_marie: "Asss",
        nom_maman_du_marie: "Diaaaa",
        prenom_fem: "Binnn",
        nom_fem: "Looooo",
        adress_fem: "Somone",
        prenom_pere_fem: "Paaaa",
        prenom_maman_fem: "Ndeyyyyy",
        nom_maman_fem: "Cisss",
        option: "Polyyy",
        regime_matrimoniale: "Séparation Bienn"
      }
    ];
   }
//Pour tester puisque l'api n'est pas encore disponible
   listMariage():Acte_Mariage[] {
    return this.mariages;
  }

  public getAllMariages(): Observable<Acte_Mariage[]>{
    return this.http.get<Acte_Mariage[]>(this.url_acte_mariage);
  }

  public getMariageById(id: number): Observable<Acte_Mariage>{
    const url = `${this.url_acte_mariage}/${id}`;
    return this.http.get<Acte_Mariage>(url);
  }

  public addMariage(mariage: Acte_Mariage): Observable<Acte_Mariage>{
    return this.http.post<Acte_Mariage>(this.url_acte_mariage, mariage);
  }

  public updateMariage(id: number, mariage: Acte_Mariage): Observable<Acte_Mariage>{
    const url= `${this.url_acte_mariage}/${id}`;
    return this.http.put<Acte_Mariage>(url, mariage);
  }

  public deleteMariage(id: number): Observable<{}>{
    const url= `${this.url_acte_mariage}/${id}`;
    return this.http.delete<{}>(url);
  }

}
