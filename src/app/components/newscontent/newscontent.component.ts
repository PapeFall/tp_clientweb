import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.scss']
})
export class NewscontentComponent implements OnInit {
  articles:any[] = []
  categorie:number=0;
  article:number=0;
  articleContent:any;
  constructor(private activatedRoute: ActivatedRoute,private articleService:ArticleService,
    private route: Router) {

      // route.events.forEach((event) => {
      //   if(event instanceof NavigationEnd) {
      //     this.getArticles()
      //   }
      //   // NavigationEnd
      //   // NavigationCancel
      //   // NavigationError
      //   // RoutesRecognized
      // });

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.article = routeParams.article;
      this.categorie = routeParams.categorie;
      this.getArticle()

    });
  }

  getArticles(){
    // this.categorie = this.activatedRoute.snapshot.params["categorie"];
    if(this.categorie && this.categorie > 0){
      this.articleService.getByCategorie(this.categorie).subscribe((data:any)=>{
        this.articles = data;
        console.log(this.articles);
        
      })
    }else{
      this.articleService.getAll().subscribe((data:any)=>{
        this.articles = data;
        console.log(this.articles);
        
      })
    }
  }

  getArticle(){
    // this.article = this.activatedRoute.snapshot.params["article"];
    if(this.article && this.article > 0){
      this.articleService.getArticle(this.article).subscribe((data:any)=>{
        this.articleContent = data;
        
      })
    }else{
      this.getArticles()
    }
  }

  detail(article:any){
   
    this.route.navigate(["/detail",article.id])
    // window.location.reload()
  }

  
}
