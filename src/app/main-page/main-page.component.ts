import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PrdctList } from '../models/prdct-list';
import { HeaderComponent } from '../sheared/header/header.component';
import { FooterComponent } from '../sheared/footer/footer.component';
import { ProductCardComponent } from '../product-display/product-card/product-card.component';
import { ProductDisplayComponent } from '../product-display/product-display.component';
import { ProductCardCategorysComponent } from '../product-display/product-card-categorys/product-card-categorys.component';
import { collection, doc, Firestore, setDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-main-page',
  standalone: true,
  // Hier unbedingt HttpClientModule importieren!
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    ProductCardCategorysComponent,
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  products: PrdctList[] = [];

  constructor(private http: HttpClient, private firestore: Firestore) {}

  ngOnInit(): void {
    // this.addSamllCardCategorys();
  }

  // async addSamllCardCategorys() {
  //   const categories = [
  //     { name: 'Getränke', imageUrl: 'https://source.unsplash.com/400x300/?drinks' },
  //     { name: 'Snacks', imageUrl: 'https://source.unsplash.com/400x300/?snacks' },
  //     { name: 'Obst & Gemüse', imageUrl: 'https://source.unsplash.com/400x300/?fruits,vegetables' },
  //     { name: 'Milchprodukte', imageUrl: 'https://source.unsplash.com/400x300/?dairy' },
  //   ];
  
  //   const categoriesCollection = collection(this.firestore, 'categories');
  
  //   for (const category of categories) {
  //     try {
  //       const categoryDocRef = doc(categoriesCollection, category.name); // 🔹 Optimierte Referenz
  //       await setDoc(categoryDocRef, category);
  //       console.log(`Kategorie ${category.name} erfolgreich hinzugefügt!`);
  //     } catch (error) {
  //       console.error(`Fehler beim Hinzufügen der Kategorie ${category.name}:`, error);
  //     }
  //   }
  // }
}
