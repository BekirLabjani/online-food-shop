import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'; // Importiere MatDialog
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { Userdata } from '../../models/userdata.class';
import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
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

  user: Userdata = {
    email: '',
    password: ''
  }

  constructor(private dialog: MatDialog, private auth: Auth, private router: Router, private service: GeneralFunctionsService){}

  login(ngForm: NgForm){
    this.loginUser(this.user);
    this.resetForm(ngForm);
    this.service.loadUsers();
  }

  loginUser(user: Userdata): Promise<void> 
  {
    return signInWithEmailAndPassword(this.auth, user.email, user.password).then(()=> {
      alert('funktioniert!!')
      this.router.navigateByUrl('/main-page' + user.id);
    })
  }

  resetForm(ngForm: NgForm) {
    // Setze die Formular-Daten zurück
    ngForm.resetForm();
  }

  openAddUserDialog(){
    this.dialog.open(DialogAddUserComponent)
  }

}
