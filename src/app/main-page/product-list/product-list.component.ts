import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PrdctList } from '../../models/prdct-list';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [    
    CommonModule,
    HttpClientModule,
    ProductCardComponent
    
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: any[] = []; // Alle Produkte
  newProducts: any[] = []; // Gefilterte neue Produkte

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Daten aus der JSON-Datei laden
    this.http.get<any>('assets/category.json').subscribe(data => {
      // Extrahiere alle Produkte aus allen Kategorien
      const allProducts = data.categories.flatMap((category: any) =>
        category.subcategories
          ? category.subcategories.flatMap((subcategory: any) => subcategory.products)
          : category.products
      );

      // Filtere die neuen Produkte
      this.newProducts = allProducts.filter((product: any) => product.newArrival === true);
    });
  }
}