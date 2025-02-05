import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  
    products: any[] = [];  // 🔹 Array zum Speichern der Produkte
    isLoading: boolean = true;
  
    constructor(private firestore: Firestore) {}
  
    async ngOnInit() {
      await this.loadProducts();  // 🔹 Produkte beim Laden der Komponente abrufen
    }
  
    async loadProducts() {
      try {
        // 🔹 Firestore-Pfad zur Sammlung
        const productsCollection = collection(this.firestore, 'products/drinks/subcategory/water/products');
        
        // 🔹 Abrufen der Produkt-Daten
        const querySnapshot = await getDocs(productsCollection);
  
        // 🔹 Daten in das products-Array speichern
        this.products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        console.log('Produkte geladen:', this.products);
      } catch (error) {
        console.error('Fehler beim Laden der Produkte:', error);
      } finally {
        this.isLoading = false;  // 🔹 Ladeanzeige beenden
      }
    }
  }
  

