import { Component } from '@angular/core';
import { StCtgComponent } from './st-ctg/st-ctg.component';
import { HeaderComponent } from "../../sheared/header/header.component";
import { FooterComponent } from "../../sheared/footer/footer.component";

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [StCtgComponent, HeaderComponent, FooterComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent {

}
