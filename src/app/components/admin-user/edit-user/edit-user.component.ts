import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public user: any,private dialogRef:MatDialogRef<EditUserComponent>) { }
  profils:string[]=["EDITEUR","ADMINISTRATEUR"]
  formGroup = this.formBuilder.group({
    id: [''],
    prenom: ['', Validators.required],
    nom: ['', Validators.required],
    login: ['', Validators.required],
    password: ['', Validators.required],
    profil: ['', Validators.required]

  })
  ngOnInit(): void {
      if(this.user){
        this.formGroup.setValue(this.user);
      }
  }

  submit(){
    if(this.formGroup.valid){
      if(!this.user || this.user==null){
        this.userService.create(this.formGroup.value).subscribe((data:any)=>{
          this.dialogRef.close(data);
        });
      }else{
        this.userService.update(this.formGroup.value).subscribe((data:any)=>{
          this.dialogRef.close(data);
        });
      }
      
    }
  }
}
