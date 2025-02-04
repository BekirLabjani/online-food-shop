import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-product-card-categorys',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './product-card-categorys.component.html',
  styleUrl: './product-card-categorys.component.scss'
})
export class ProductCardCategorysComponent {
  categories: any[] = [];

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    const categoriesCollection = collection(this.firestore, 'categories');
    const querySnapshot = await getDocs(categoriesCollection);

    this.categories = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
}


