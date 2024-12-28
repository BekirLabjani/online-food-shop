// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrdctList } from '../models/prdct-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<PrdctList[]> = new BehaviorSubject<PrdctList[]>(this.loadCart());
  public cartItems$: Observable<PrdctList[]> = this.cartItemsSubject.asObservable();

  constructor() { }

  private loadCart(): PrdctList[] {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItemsSubject.getValue()));
  }
  private updateCart(updatedCart: PrdctList[]): void {
    this.cartItemsSubject.next(updatedCart);
    this.saveCart();
  }
  

  addOneToCart(product: PrdctList) {
    const currentCart = this.cartItemsSubject.getValue();
    const existingProduct = currentCart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      currentCart.push({ ...product, quantity: 1 });
    }
    this.cartItemsSubject.next([...currentCart]);
    this.saveCart(); // Speichern nach jeder Änderung
  }

  removeOneFromCart(productId: number) {
    const currentCart = this.cartItemsSubject.getValue();
    const existingProduct = currentCart.find(item => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity -= 1;
      if (existingProduct.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.cartItemsSubject.next([...currentCart]);
        this.saveCart(); // Speichern nach jeder Änderung
      }
    }
  }

  removeFromCart(productId: number) {
    const updatedCart = this.cartItemsSubject.getValue().filter(item => item.id !== productId);
    this.cartItemsSubject.next([...updatedCart]);
    this.saveCart(); // Speichern nach jeder Änderung
  }

  getCartItems(): PrdctList[] {
    return this.cartItemsSubject.getValue();
  }

  addMultipleToCart(product: PrdctList, quantity: number) {
    const currentCart = this.cartItemsSubject.getValue();
    const existingProduct = currentCart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      currentCart.push({ ...product, quantity });
    }
    this.updateCart([...currentCart]);
  }
}
