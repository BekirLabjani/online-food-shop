import { Component, OnDestroy, OnInit } from '@angular/core';
import { StCtgComponent } from './st-ctg/st-ctg.component';
import { HeaderComponent } from "../../sheared/header/header.component";
import { FooterComponent } from "../../sheared/footer/footer.component";
import { compileComponentFromMetadata } from '@angular/compiler';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [StCtgComponent, HeaderComponent, FooterComponent, CommonModule],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.scss'
})
export class StartPageComponent implements OnInit, OnDestroy {
  images: string[] = [
    'assets/img/carusel/islamic-lantern-with-bokeh-lights-background-adha-fitr-eid.jpg',
    'assets/img/slide2.jpg',
    'assets/img/slide3.jpg',
    'assets/img/slide4.jpg',
    'assets/img/slide5.jpg'
  ];

  currentSlideIndex: number = 0;
  private intervalId: any;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Wechsle alle 5 Sekunden
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentSlideIndex =
      (this.currentSlideIndex - 1 + this.images.length) % this.images.length;
  }
}