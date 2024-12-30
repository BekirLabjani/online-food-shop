import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  constructor(private dialogRef: MatDialogRef<DialogAddUserComponent>){

  }

  signUp(registForm: NgForm){
    
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
