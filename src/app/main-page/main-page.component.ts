import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { PrdctList } from '../models/prdct-list';
import { HeaderComponent } from '../sheared/header/header.component';
import { FooterComponent } from '../sheared/footer/footer.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { ProductListComponent } from './product-list/product-list.component';


@Component({
  selector: 'app-main-page',
  standalone: true,
  // Hier unbedingt HttpClientModule importieren!
  imports: [
    ProductCardComponent,
    CommonModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    CategoryCardComponent,
    ProductListComponent
],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
 
}
