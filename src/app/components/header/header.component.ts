import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  categories:any[] = ["sport","politique"]
  constructor(private categorieService: CategorieService,
    private route:Router) { }

  ngOnInit(): void {
    this.categorieService.getAll().subscribe((data:any)=>{
      console.log(data)
      this.categories = data;
    })
  }
  // articlesList(categorie:any){
  //   this.route.navigate(["/categorie",categorie.id])
  //   // window.location.reload()

  // }
}
