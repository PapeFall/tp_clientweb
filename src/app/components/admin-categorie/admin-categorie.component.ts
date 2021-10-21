import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategorieService } from 'src/app/services/categorie.service';
import { EditCategorieComponent } from './edit-categorie/edit-categorie.component';

@Component({
  selector: 'app-admin-categorie',
  templateUrl: './admin-categorie.component.html',
  styleUrls: ['./admin-categorie.component.scss']
})
export class AdminCategorieComponent implements OnInit {
  displayedColumns: string[] = ['id', 'libelle','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator:QueryList<MatPaginator> = new QueryList();
  constructor(private categorieService:CategorieService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getcategories();
  }

  getcategories(){
    this.categorieService.getAll().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator= this.paginator.toArray()[0];
    })
  }
  editcategorie(categorie:any){
    const dialogRef = this.dialog.open(EditCategorieComponent,
      {
        data:categorie,
        width:"400px"
      });

      dialogRef.afterClosed().subscribe((result:any)=>{
        if(result){
          this.getcategories();
        }
      })
  }

  delete(categorie:any){
    this.categorieService.delete(categorie.id).subscribe((data:any)=>{
      if(data){
        this.getcategories();
      }
    });
  }

}
