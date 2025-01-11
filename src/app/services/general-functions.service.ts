import { Injectable, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, onSnapshot } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { DialogForUserComponent } from '../dialog-for-user/dialog-for-user.component';

@Injectable({
  providedIn: 'root'
})
export class GeneralFunctionsService implements OnInit {

  private dialogForUser: DialogForUserComponent | null = null;
  userEmails: any [] = [];
  users: any[] = [];
  private unsubscribe: (() => void) | null = null; // Variable für das Beenden des Abonnements

  constructor(private firestore: Firestore) {
   }

   ngOnInit(): void {
    
   }

   ngOnDestroy(){
    if(this.unsubscribe){
      this.unsubscribe();
    }
   }

  getUsersRef() {
    return collection(this.firestore, 'users'); // Mit dem Befehl collection() greifen wir auf die gesamte Sammlung 'trash' in unserem Firestore zu.
  }

  loadUsers(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const usersCollection = collection(this.firestore, 'users');
      this.unsubscribe = onSnapshot(usersCollection, (snapshot) => {
        this.users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        resolve(this.users); // 🔴 Promise wird aufgelöst, wenn die Daten geladen sind
      }, (error) => {
        reject(error); // 🔴 Promise wird bei einem Fehler abgelehnt
      });
    });
  }

}
