import { Component } from '@angular/core';
import { HeaderComponent } from '../sheared/header/header.component';
import { FooterComponent } from '../sheared/footer/footer.component';
import { CategoryCardComponent } from './category-card/category-card.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,CategoryCardComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
