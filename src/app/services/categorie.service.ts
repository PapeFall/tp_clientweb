import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  readonly api = environment.service_rest;

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<any>(this.api+"categorie");
  }
  create(categorie:any){
    return this.http.put<any>(this.api+"create",categorie);
  }
  update(categorie:any){
    return this.http.put<any>(this.api+"update",categorie);
  }
  delete(id:number){
    return this.http.delete<any>(this.api+"delete/"+id);
  }
}
