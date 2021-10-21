import { Component, OnInit, QueryList, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/services/user.service';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.scss']
})
export class AdminUserComponent implements OnInit {
  displayedColumns: string[] = ['id', 'prenom','nom','login','profil','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator:QueryList<MatPaginator> = new QueryList();
  constructor(private userService:UserService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getusers();
  }

  getusers(){
    this.userService.getAll().subscribe((data:any)=>{
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator= this.paginator.toArray()[0];
    })
  }
  edituser(user:any){
    const dialogRef = this.dialog.open(EditUserComponent,
      {
        data:user,
        width:"400px"
      });

      dialogRef.afterClosed().subscribe((result:any)=>{
        if(result){
          this.getusers();
        }
      })
  }

  delete(user:any){
    this.userService.delete(user.id).subscribe((data:any)=>{
      if(data){
        this.getusers();
      }
    });
  }
}
