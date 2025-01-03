import { Injectable, OnInit } from '@angular/core';
import { Firestore, collectionData, collection, onSnapshot } from '@angular/fire/firestore';
import { User } from '../../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class GeneralFunctionsService implements OnInit {

  users: any = '';
  private unsubscribe: (() => void) | null = null; // Variable für das Beenden des Abonnements

  constructor(private firestore: Firestore) {
   }

   ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');
    this.unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      this.users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      console.log(this.users);
   })}

   ngOnDestroy(){
    if(this.unsubscribe){
      this.unsubscribe();
    }
   }

  getUsersRef() {
    return collection(this.firestore, 'users'); // Mit dem Befehl collection() greifen wir auf die gesamte Sammlung 'trash' in unserem Firestore zu.
  }

  loadUsers(){
   
  }


}
