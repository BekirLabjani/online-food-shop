import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [],
  templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  @Input() category: any; 

  constructor(private router: Router) {}

  onCategoryClick(): void {
    // Navigiere zur Route mit der Kategorie-ID
    this.router.navigate(['/products', this.category.id]);
  }
}
