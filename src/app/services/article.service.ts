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
    return this.http.post<any>(this.api+"article",article);
  }
  getByCategorie(categorie:number){
    return this.http.get<any>(this.api+"article/categorie/"+categorie)
  }
  update(article:any){
    let formData:FormData = new FormData();
    Object.keys(article).forEach((key,index)=>{
      formData.append(key,article[key]);
    });
    return this.http.put<any>(this.api+"article",article);
  }
  delete(id:number){
    return this.http.delete<any>(this.api+"article/delete/"+id);
  }
}
