import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'; // Importiere MatDialog
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Userdata } from '../../models/userdata.class';
import { getAuth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '../../models/user.class';
import { GeneralFunctionsService } from '../services/general-functions.service';


@Component({
  selector: 'app-dialog-for-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-for-user.component.html',
  styleUrl: './dialog-for-user.component.scss'
})
export class DialogForUserComponent {

  allUsers: any[] = [];
  userEmails: any[] = [];
  id: string = '';
  user: Userdata = {
    email: '',
    password: ''
  }

  constructor(private dialog: MatDialog, private router: Router, private service: GeneralFunctionsService, private dialogRef: MatDialogRef<DialogForUserComponent>){
  }

  async login(ngForm: NgForm){
    await this.loginUser();
    this.resetForm(ngForm);
  }

  async loginUser() {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
      const user = userCredential.user;
      if (user.email) {
        this.user.email = user.email.toString();
        this.getAllUsers(this.user.email);
      }
    } catch (error) {
      console.error('Login fehlgeschlagen:', error);
    }
  }

  async getAllUsers(email: string) {
    try {
      this.allUsers = await this.service.loadUsers(); // 🔴 Warte, bis die Daten geladen sind
      console.log(this.allUsers); // ✅ Wird ausgeführt, wenn die Daten vollständig geladen sind
      this.getIdFromUser(email);
    } catch (error) {
      console.error('Fehler beim Laden der Benutzerdaten:', error);
    }
  }

  getIdFromUser(email: string){
    let users = this.allUsers;
    console.log(email);
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if(email == user.email){
        this.id = user.id;
        console.log(this.id);
        this.closeDialog();
        this.router.navigateByUrl('/main-page/' + this.id);
      }
    }
  }

  resetForm(ngForm: NgForm) {
    // Setze die Formular-Daten zurück
    ngForm.resetForm();
  }

  openAddUserDialog(){
    this.dialog.open(DialogAddUserComponent)
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
