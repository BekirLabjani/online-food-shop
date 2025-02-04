import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  categories: any[] = []; // 🔹 Array zum Speichern der geladenen Kategorien

constructor(private firestore: Firestore) {}

  // 🔹 Kategorien aus Firestore abrufen
  async getCategories() {
    const categoriesCollection = collection(this.firestore, 'categories');
    const querySnapshot = await getDocs(categoriesCollection);

    // 🔹 Die Daten in ein Array umwandeln
    const categories = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    console.log('Kategorien geladen:', categories);
    return categories;
  }
}