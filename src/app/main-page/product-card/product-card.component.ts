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
export class ProductCardComponent {
  @Input() product!: PrdctList;
  drink = false;

  quantity: number = 0;
  private cartSubscription!: Subscription;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      const cartProduct = items.find(item => item.id === this.product.id);
      this.quantity = cartProduct ? cartProduct.quantity : 0;
      this.getFirstNumberOfId();
    });
  }

  getFirstNumberOfId(){
    let firstElement = this.product.id.toString().charAt(0);
    if(firstElement == '1'){
      this.drink = true;
    } else {
      this.drink = false;
    }
  }

  iconBlurZero(id: number){
    let product = document.getElementById(`${id}`);
    product?.classList.remove('blur');
  }

  iconBlur(id: number){
    let product = document.getElementById(`${id}`);
    product?.classList.add('blur');
  }

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  get inStock(): boolean {
    return this.product.stockQuantity > 0;
  }

  increment() {
    if (this.inStock) {
      this.quantity++;
      this.cartService.addOneToCart(this.product);
    }
  }

  decrement() {
    if (this.inStock && this.quantity > 0) {
      this.quantity--;
      this.cartService.removeOneFromCart(this.product.id);
    }
  }



  addSixToCart() {
    if (this.inStock && this.product.stockQuantity >= 6) {
      this.quantity += 6; // Aktualisiere die lokale Menge
      this.cartService.addMultipleToCart(this.product, 6); // Füge 6 Einheiten zum Warenkorb hinzu
    } else {
      alert('Nicht genügend Lagerbestand für 6 Flaschen!');
    }
  }

}
