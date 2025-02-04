import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PrdctList } from '../../models/prdct-list';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket-list.component.html',
  styleUrl: './basket-list.component.scss'
})
export class BasketListComponent implements OnInit , OnDestroy {
  // @Input() isSidebarOpen: boolean = false;
  // @Output() closeSidebarEvent: EventEmitter<void> = new EventEmitter<void>();
  // deliveryFee: number = 4.99; // Feste Liefergebühr


  // cartItems: PrdctList[] = [];
  // private cartSubscription!: Subscription;

  // constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
    //   this.cartItems = items;
    // });
  }

  ngOnDestroy(): void {
    // if (this.cartSubscription) {
    //   this.cartSubscription.unsubscribe();
    // }
  }

  // removeItem(productId: number) {
  //   this.cartService.removeFromCart(productId);
  // }

  // getTotalPrice(): number {
  //   return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // }
  
  
  // closeSidebar() {
  //   this.closeSidebarEvent.emit();
  // }
}
