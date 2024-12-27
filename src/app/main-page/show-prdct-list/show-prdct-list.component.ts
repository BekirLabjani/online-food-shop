import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../sheared/header/header.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-show-prdct-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ShowPrdctListComponent, HeaderComponent, ProductCardComponent],
  templateUrl: './show-prdct-list.component.html',
  styleUrl: './show-prdct-list.component.scss'
})
export class ShowPrdctListComponent implements OnInit {
  products: any[] = []; // Produkte der gewählten Kategorie
  categoryName: string = ''; // Name der Kategorie

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Hole die Kategorie-ID aus der URL
    const categoryId = this.route.snapshot.paramMap.get('id');

    if (categoryId) {
      this.http.get<any>('assets/category.json').subscribe((data) => {
        const category = data.categories.find((cat: any) => cat.id === +categoryId);
        console.log(category);
        if (category) {
          this.categoryName = category.categoryName;
          for (let i = 0; i < category.subcategories.length; i++) {
            const subcategory = category.subcategories[i];
            for (let j = 0; j < subcategory.products.length; j++) {
              const singleProduct = subcategory.products[j];
              console.log(singleProduct); 
              this.products.push(singleProduct);
            }
          }
        }
      });
    }
  }
}
