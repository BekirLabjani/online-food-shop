import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-st-ctg',
  standalone: true,
  imports: [RouterLink, HttpClientModule],
  templateUrl: './st-ctg.component.html',
  styleUrl: './st-ctg.component.scss'
})
export class StCtgComponent implements OnInit {
  products: any[] = [];
  categoryName: string = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
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
}
