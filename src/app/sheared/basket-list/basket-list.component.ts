import { Component , Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { PrdctList } from '../../models/prdct-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basket-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basket-list.component.html',
  styleUrl: './basket-list.component.scss'
})
export class BasketListComponent {
  @Input() isSidebarOpen: boolean = false;

  cartItems: PrdctList[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  updateQuantity(productId: number, quantity: number) {
    this.cartService.updateQuantity(productId, quantity);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
