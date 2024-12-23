import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../sheared/header/header.component";
import { CategoryCardComponent } from "./category-card/category-card.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [HeaderComponent, CategoryCardComponent, HttpClientModule,CommonModule],
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  categories: any[] = []; // Liste für die Kategorien

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // JSON-Daten für Kategorien laden
    this.http.get<any>('assets/category.json').subscribe((data) => {
      this.categories = data.categories;
    });
  }
}
