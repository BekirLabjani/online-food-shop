// src/app/services/cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrdctList } from '../models/prdct-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // BehaviorSubject speichert den aktuellen Zustand des Warenkorbs
  private cartItemsSubject: BehaviorSubject<PrdctList[]> = new BehaviorSubject<PrdctList[]>([]);
  
  // Observable, das von anderen Komponenten abonniert werden kann
  public cartItems$: Observable<PrdctList[]> = this.cartItemsSubject.asObservable();

  constructor() { }

  // Methode zum Hinzufügen eines Produkts zum Warenkorb
  addToCart(product: PrdctList) {
    const currentCart = this.cartItemsSubject.getValue();
    const existingProduct = currentCart.find(item => item.id === product.id);
    
    if (existingProduct) {
      // Falls das Produkt bereits im Warenkorb ist, erhöhe die Menge
      existingProduct.quantity += product.quantity;
    } else {
      // Ansonsten füge das Produkt hinzu
      currentCart.push(product);
    }
    
    // Aktualisiere den Warenkorb
    this.cartItemsSubject.next(currentCart);
  }

  // Methode zum Entfernen eines Produkts aus dem Warenkorb
  removeFromCart(productId: number) {
    let currentCart = this.cartItemsSubject.getValue();
    currentCart = currentCart.filter(item => item.id !== productId);
    this.cartItemsSubject.next(currentCart);
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
        this.cartItemsSubject.next(currentCart);
      }
    }
  }

  // Methode zum Abrufen aller Warenkorb-Elemente
  getCartItems(): PrdctList[] {
    return this.cartItemsSubject.getValue();
  }
}
