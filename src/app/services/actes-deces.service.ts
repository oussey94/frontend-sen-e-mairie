import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acte_Dece } from '../models/acte-dece.model';

@Injectable({
  providedIn: 'root'
})
export class ActesDecesService {

  public readonly url_acte_dece:string='';

  constructor( private http: HttpClient) { }

  public getAllDeces(): Observable<Acte_Dece[]>{
    return this.http.get<Acte_Dece[]>(this.url_acte_dece);
  }

  public getDeceById(id: number): Observable<Acte_Dece>{
    const url = `${this.url_acte_dece}/${id}`;
    return this.http.get<Acte_Dece>(url);
  }

  public addDece(dece: Acte_Dece): Observable<Acte_Dece>{
    return this.http.post<Acte_Dece>(this.url_acte_dece, dece);
  }

  public updateDece(id: number, dece: Acte_Dece): Observable<Acte_Dece>{
    const url= `${this.url_acte_dece}/${id}`;
    return this.http.put<Acte_Dece>(url, dece);
  }

  public deleteDece(id: number): Observable<{}>{
    const url= `${this.url_acte_dece}/${id}`;
    return this.http.delete<{}>(url);
  }

}
