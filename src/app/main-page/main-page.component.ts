import { Component } from '@angular/core';
import { HeaderComponent } from '../sheared/header/header.component';
import { FooterComponent } from '../sheared/footer/footer.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
