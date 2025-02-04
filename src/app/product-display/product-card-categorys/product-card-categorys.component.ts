import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-product-card-categorys',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card-categorys.component.html',
  styleUrl: './product-card-categorys.component.scss'
})
export class ProductCardCategorysComponent {
  categories: any[] = [];

  constructor(private firestore: Firestore) {}

  async ngOnInit() {
    const  categoryCollaction = collection(this.firestore, `categories`);
    const querySnap = await getDocs(categoryCollaction);

    this.categories = querySnap.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
}
}

