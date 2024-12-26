import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCardComponent } from "../../product-card/product-card.component";
import { CommonModule } from '@angular/common';
import { PrdctList } from '../../../models/prdct-list';

@Component({
  selector: 'app-dynamic-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './dynamic-product-list.component.html',
  styleUrl: './dynamic-product-list.component.scss',
})
export class DynamicProductListComponent implements OnInit {
  @Input() productType: string = ''; // Typ der anzuzeigenden Produkte
  products: any[] = []; // Gefilterte Produkte
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Lade die JSON-Daten
    this.http.get<any>('assets/category.json').subscribe(data => {
      // Extrahiere alle Produkte aus den Kategorien
      const allProducts: PrdctList[] = data.categories.flatMap((category: any) =>
        category.subcategories
          ? category.subcategories.flatMap((subcategory: any) => subcategory.products)
          : category.products
      );

      // Filtere basierend auf dem Produkt-Typ
      if (this.productType === 'new') {
        this.products = allProducts.filter((product: PrdctList) => product.newArrival);
      } else if (this.productType === 'popular') {
        this.products = allProducts.filter((product: PrdctList) => product.bestseller);
      } else if (this.productType === 'discount') {
        this.products = allProducts.filter((product: PrdctList) => product.discountPrice !== undefined);
      }
    });
  }
}