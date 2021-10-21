import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly api = environment.service_rest;

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<any>(this.api+"user");
  }
  create(categorie:any){
    return this.http.post<any>(this.api+"user",categorie);
  }
  update(categorie:any){
    return this.http.put<any>(this.api+"user",categorie);
  }
  delete(id:number){
    return this.http.delete<any>(this.api+"user/delete/"+id);
  }
}
