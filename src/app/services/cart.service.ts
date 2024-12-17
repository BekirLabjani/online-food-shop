// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrdctList } from '../models/prdct-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<PrdctList[]> = new BehaviorSubject<PrdctList[]>([]);
  public cartItems$: Observable<PrdctList[]> = this.cartItemsSubject.asObservable();

  constructor() { }

  // Methode zum Hinzufügen eines Produkts zum Warenkorb
  addToCart(product: PrdctList) {
    const currentCart = this.cartItemsSubject.getValue();
    const existingProduct = currentCart.find(item => item.id === product.id);
    
    if (existingProduct) {
      // Falls das Produkt bereits im Warenkorb ist, erhöhe die Menge
      existingProduct.quantity += 1;
    } else {
      // Ansonsten füge das Produkt hinzu
      currentCart.push({ ...product, quantity: 1 });    }
    
    // Aktualisiere den Warenkorb
    this.cartItemsSubject.next([...currentCart]);
  }

  // Methode zum Entfernen eines Produkts aus dem Warenkorb
  removeOneFromCart(productId: number) {
    const currentCart = this.cartItemsSubject.getValue();
    const existingProduct = currentCart.find(item => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity -= 1;
      if (existingProduct.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.cartItemsSubject.next([...currentCart]);
      }
    }
  }

  removeFromCart(productId: number) {
    const currentCart = this.cartItemsSubject.getValue().filter(item => item.id !== productId);
    this.cartItemsSubject.next([...currentCart]);
  }
  
  // Methode zum Aktualisieren der Menge eines Produkts
  updateQuantity(productId: number, quantity: number) {
    const currentCart = this.cartItemsSubject.getValue();
    const product = currentCart.find(item => item.id === productId);
    
    if (product) {
      product.quantity = quantity;
      if (product.quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        this.cartItemsSubject.next([...currentCart]);
      }
    }
  }

  
  updateCart(product: PrdctList): void {
    const currentCart = this.cartItemsSubject.getValue();
    const index = currentCart.findIndex(item => item.id === product.id);
    if (index !== -1) {
      currentCart[index] = { ...product };
      this.cartItemsSubject.next([...currentCart]);
    }
  }
  
  // Methode zum Abrufen aller Warenkorb-Elemente
  getCartItems(): PrdctList[] {
    return this.cartItemsSubject.getValue();
  }
}
