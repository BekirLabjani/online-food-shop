import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrdctList } from '../../models/prdct-list';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CartService } from '../../services/cart.service';
import { Subscription } from 'rxjs';



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
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      const cartProduct = items.find(item => item.id === this.product.id);
      this.quantity = cartProduct ? cartProduct.quantity : 0;
    });
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  increment() {
    this.quantity++;
    this.updateCart();
  }

  decrement() {
    this.cartService.removeOneFromCart(this.product.id);
  }

  updateCart() {
    const productToAdd: PrdctList = { ...this.product, quantity: this.quantity };
    this.cartService.addToCart(productToAdd);
  }
}