import { Injectable, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, onSnapshot } from '@angular/fire/firestore';
import { User } from '../../models/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralFunctionsService implements OnInit {

  private dialogForUser:  | null = null;
  userEmails: any [] = [];
  users: any[] = [];
  private unsubscribe: (() => void) | null = null; // Variable für das Beenden des Abonnements

  constructor(private firestore: Firestore, private router: Router) {
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

  openProfile() {
    this.router.navigateByUrl('/profile');
  }

}
