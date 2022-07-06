import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acte_Naissance } from '../models/acte-naissance.model';

@Injectable({
  providedIn: 'root'
})
export class ActesNaissancesService {

  public readonly url_acte_naissance:string='';

  constructor(private http: HttpClient) { }

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
