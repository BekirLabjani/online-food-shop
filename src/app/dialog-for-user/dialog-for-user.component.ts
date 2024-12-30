import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'; // Importiere MatDialog
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-dialog-for-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-for-user.component.html',
  styleUrl: './dialog-for-user.component.scss'
})
export class DialogForUserComponent {

  constructor(private dialog: MatDialog){}

  login(ngForm: NgForm){
    this.resetForm(ngForm);
  }

  resetForm(ngForm: NgForm) {
    // Setze die Formular-Daten zurück
    ngForm.resetForm();
  }

  openAddUserDialog(){
    this.dialog.open(DialogAddUserComponent)
  }

}
