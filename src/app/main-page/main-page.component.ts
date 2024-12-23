import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { PrdctList } from '../models/prdct-list';
import { HeaderComponent } from '../sheared/header/header.component';
import { FooterComponent } from '../sheared/footer/footer.component';
import { CategoryCardComponent } from './category-page/category-card/category-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StartPageComponent } from "./start-page/start-page.component";


@Component({
  selector: 'app-main-page',
  standalone: true,
  // Hier unbedingt HttpClientModule importieren!
  imports: [
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    CategoryCardComponent,
    ProductListComponent,
    StartPageComponent
],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  products: PrdctList[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PrdctList[]>('assets/products.json')
      .subscribe(data => {
        // Initialisiere die 'quantity' für jedes Produkt
        this.products = data.map(product => ({
          ...product,
          quantity: 0
        }));
      });
  }
}
