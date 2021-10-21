import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.scss']
})
export class EditCategorieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private categorieService: CategorieService,
    @Inject(MAT_DIALOG_DATA) public categorie: any,private dialogRef:MatDialogRef<EditCategorieComponent>) { }

  formGroup = this.formBuilder.group({
    id: [''],
    libelle: ['', Validators.required]
  })
  ngOnInit(): void {
      if(this.categorie){
        this.formGroup.setValue(this.categorie);
      }
  }

  submit(){
    if(this.formGroup.valid){
      if(!this.categorie || this.categorie==null){
        this.categorieService.create(this.formGroup.value).subscribe((data:any)=>{
          this.dialogRef.close(data);
        });
      }else{
        this.categorieService.update(this.formGroup.value).subscribe((data:any)=>{
          this.dialogRef.close(data);
        });
      }
      
    }
  }

}
