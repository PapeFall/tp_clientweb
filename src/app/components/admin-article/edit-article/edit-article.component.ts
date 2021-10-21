import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleService } from 'src/app/services/article.service';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private categorieService: CategorieService,
    @Inject(MAT_DIALOG_DATA) public article: any,private articleService:ArticleService,private dialogRef:MatDialogRef<EditArticleComponent>) { }

  formGroup = this.formBuilder.group({
    id: [''],
    titre: ['', Validators.required],
    contenu: ['', Validators.required],
    dateCreation: [''],
    dateModification: [''],
    categorie: ['']
  })
  categories: any;
  ngOnInit(): void {
    this.categorieService.getAll().subscribe((data: any) => {
      this.categories = data;
      if(this.article){
        this.formGroup.setValue(this.article);
      }

    })
  }

  submit(){
    if(this.formGroup.valid){
      if(!this.article || this.article==null){
        this.articleService.create(this.formGroup.value).subscribe((data:any)=>{
          this.dialogRef.close(data);
        });
      }else{
        this.articleService.update(this.formGroup.value).subscribe((data:any)=>{
          this.dialogRef.close(data);
        });
      }
      
    }
  }


}
