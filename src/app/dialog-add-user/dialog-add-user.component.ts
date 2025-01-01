import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user.class';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';



@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

  user: User = new User();

  constructor(private dialogRef: MatDialogRef<DialogAddUserComponent>, private firestore: Firestore, private af: Auth,){

  }

  signUp(value: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    city: string;
    street: string;
    zipCode: string;
  }){
    try {
      this.addNewUser(value.email, value.password, value.firstName, value.lastName, value.city, value.street, value.zipCode);
      this.closeDialog();
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration. Please try again.');
    }
  }

  async addNewUser(email: any, password: any, firstName: any, lastName: any, city: any, street: any, zipCode: any){
    const userCredential = await createUserWithEmailAndPassword(
      this.af,
      email,
      password
    );
    const user = userCredential.user;
    await updateProfile(user, { displayName: firstName + lastName});
    await addDoc(collection(this.firestore, 'users'), {
      userName: firstName,
      email: email,
      city: city,
      street: street,
      zipCode: zipCode
    });
  }

  

  closeDialog(){
    this.dialogRef.close();
  }

}
