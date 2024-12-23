import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from "../../../sheared/header/header.component";

@Component({
  selector: 'app-show-prdct-cards',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './show-prdct-cards.component.html',
  styleUrl: './show-prdct-cards.component.scss'
})
export class ShowPrdctCardsComponent implements OnInit {
  products: any[] = []; // Produkte der gewählten Kategorie
  categoryName: string = ''; // Name der Kategorie

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    // Hole die Kategorie-ID aus der URL
    const categoryId = this.route.snapshot.paramMap.get('id');

    if (categoryId) {
      this.http.get<any>('assets/category.json').subscribe((data) => {
        const category = data.categories.find((cat: any) => cat.id === +categoryId);
        if (category) {
          this.categoryName = category.categoryName;
          this.products = category.products;
        }
      });
    }
  }
}{

}

