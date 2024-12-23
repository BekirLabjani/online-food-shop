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
  products: PrdctList[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PrdctList[]>('assets/products.json')
      .subscribe(data => {
        // 'data' ist ein Array aller Produkte; wir speichern sie direkt in 'this.products'
        this.products = data;
      });
  }

  trackById(index: number, product: PrdctList): number {
    return product.id;
  }
}
