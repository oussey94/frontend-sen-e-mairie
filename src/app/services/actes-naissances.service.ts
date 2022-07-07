import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acte_Naissance } from '../models/acte-naissance.model';

@Injectable({
  providedIn: 'root'
})
export class ActesNaissancesService {

  public readonly url_acte_naissance:string='';

  naissances: Acte_Naissance[];

  constructor(private http: HttpClient) {
    this.naissances = [
      {
    id: 1,
    region: "Thies",
    departement: "Mbour",
    arrondissement: "Sinda",
    collectivite_locale: "Somone",
    centre: "Somone",
    annee_extrait_int: new Date(),
    annee_extrait_string: "Deux mille vingt deux",
    num_extrait_int: 1234,
    num_extrait_string: "Un deux...",
    date_naissance: new Date(),
    heure_naissance: new Date(),
    sexe_enfant: "M",
    lieu_de_naissance: "Somone",
    nom_enfant: "Mbod",
    prenom_enfant: "Weuz",
    prenom_pere: "Salll",
    nom_maman: "Diouf",
    prenom_maman: "Fatou",
    pays_naissance: "Senegal"
      },
      {
        id: 1,
        region: "Thies",
        departement: "Mbour",
        arrondissement: "Sinda",
        collectivite_locale: "Somone",
        centre: "Somone",
        annee_extrait_int: new Date(),
        annee_extrait_string: "Deux mille vingt deux",
        num_extrait_int: 1234,
        num_extrait_string: "Un deux...",
        date_naissance: new Date(),
        heure_naissance: new Date(),
        sexe_enfant: "M",
        lieu_de_naissance: "Somone",
        nom_enfant: "Mbod",
        prenom_enfant: "Weuz",
        prenom_pere: "Salll",
        nom_maman: "Diouf",
        prenom_maman: "Fatou",
        pays_naissance: "Senegal"
          },
           {
    id: 1,
    region: "Thies",
    departement: "Mbour",
    arrondissement: "Sinda",
    collectivite_locale: "Somone",
    centre: "Somone",
    annee_extrait_int: new Date(),
    annee_extrait_string: "Deux mille vingt deux",
    num_extrait_int: 1234,
    num_extrait_string: "Un deux...",
    date_naissance: new Date(),
    heure_naissance: new Date(),
    sexe_enfant: "M",
    lieu_de_naissance: "Somone",
    nom_enfant: "Mbod",
    prenom_enfant: "Weuz",
    prenom_pere: "Salll",
    nom_maman: "Diouf",
    prenom_maman: "Fatou",
    pays_naissance: "Senegal"
      },
      {
        id: 1,
        region: "Thies",
        departement: "Mbour",
        arrondissement: "Sinda",
        collectivite_locale: "Somone",
        centre: "Somone",
        annee_extrait_int: new Date(),
        annee_extrait_string: "Deux mille vingt deux",
        num_extrait_int: 1234,
        num_extrait_string: "Un deux...",
        date_naissance: new Date(),
        heure_naissance: new Date(),
        sexe_enfant: "M",
        lieu_de_naissance: "Somone",
        nom_enfant: "Mbod",
        prenom_enfant: "Weuz",
        prenom_pere: "Salll",
        nom_maman: "Diouf",
        prenom_maman: "Fatou",
        pays_naissance: "Senegal"
          }
    ];
   }

   //Pour tester puisque l'api n'est pas encore disponible
   listNaissance():Acte_Naissance[] {
    return this.naissances;
  }

  public getAllNaissances(): Observable<Acte_Naissance[]>{
    return this.http.get<Acte_Naissance[]>(this.url_acte_naissance);
  }

  public getNaissanceById(id: number): Observable<Acte_Naissance>{
    const url = `${this.url_acte_naissance}/${id}`;
    return this.http.get<Acte_Naissance>(url);
  }

  public addNaissance(naissance: Acte_Naissance): Observable<Acte_Naissance>{
    return this.http.post<Acte_Naissance>(this.url_acte_naissance, naissance);
  }

  public updateNaissance(id: number, naissance: Acte_Naissance): Observable<Acte_Naissance>{
    const url= `${this.url_acte_naissance}/${id}`;
    return this.http.put<Acte_Naissance>(url, naissance);
  }

  public deleteNaissance(id: number): Observable<{}>{
    const url= `${this.url_acte_naissance}/${id}`;
    return this.http.delete<{}>(url);
  }

}
