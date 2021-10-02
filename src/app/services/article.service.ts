import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  

  readonly api = environment.service_rest;

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<any>(this.api+"article");
  }
  getArticle(article: number) {
    return this.http.get<any>(this.api+"article/"+article)
  }
  create(article:any){
    return this.http.put<any>(this.api+"article/create",article);
  }
  getByCategorie(categorie:number){
    return this.http.get<any>(this.api+"article/categorie/"+categorie)
  }
  update(article:any){
    return this.http.put<any>(this.api+"article/update",article);
  }
  delete(id:number){
    return this.http.delete<any>(this.api+"article/delete/"+id);
  }
}
