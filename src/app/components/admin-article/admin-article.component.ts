import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleService } from 'src/app/services/article.service';
import { EditArticleComponent } from './edit-article/edit-article.component';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.scss']
})
export class AdminArticleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'titre', 'dateCreation','dateModification','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator:QueryList<MatPaginator> = new QueryList();
  constructor(private articleService:ArticleService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles(){
    this.articleService.getAll().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator.toArray()[0];
    })
  }
  editArticle(article:any){
    const dialogRef = this.dialog.open(EditArticleComponent,
      {
        data:article,
        width:"600px"
      });

      dialogRef.afterClosed().subscribe((result:any)=>{
        if(result){
          this.getArticles();
        }
      })
  }

  delete(article:any){
    this.articleService.delete(article.id).subscribe((data:any)=>{
      if(data){
        this.getArticles();
      }
    });
  }
}
