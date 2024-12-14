import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrdctList } from '../../models/prdct-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CartService } from '../../services/cart.service';



@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent  {
  @Input() product!: PrdctList;

  quantity: number = 0;

  constructor(private cartService: CartService) {}

  increment() {
    this.quantity++;
    this.updateCart();
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
      this.updateCart();
    }
  }

  updateCart() {
    const productToAdd: PrdctList = { ...this.product, quantity: this.quantity };
    this.cartService.addToCart(productToAdd);
  }
}
