import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrdctList } from '../../models/prdct-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent implements OnInit {
  // Du kannst das Produkt von außerhalb per @Input() reinreichen
  @Input() product: PrdctList | undefined;

  constructor() { }

  ngOnInit(): void {
    // Optional: Falls du dynamisch Daten laden willst, mach das über einen Service oder MainPage
  }
}

