import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { BasketListComponent } from "../basket-list/basket-list.component";
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { map, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DialogForUserComponent } from '../../dialog-for-user/dialog-for-user.component';
import { MatDialog } from '@angular/material/dialog'; // Importiere MatDialog


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, BasketListComponent,CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isSidebarOpen = false;
  cartItemCount$: Observable<number>;
  cartTotal$: Observable<number>;
  private cartSubscription!: Subscription;

  isUserLoggedIn = true; // Zustand, ob der Benutzer eingeloggt ist
  isDropdownOpen = false; // Zustand des Dropdown-Menüs

  user = {
    name: 'Max Mustermann',
    avatar: 'assets/img/user-avatar.png'
  };

  constructor(private cartService: CartService, private dialog: MatDialog) {
    // Berechnung der Gesamtanzahl der Artikel im Warenkorb
    this.cartItemCount$ = this.cartService.cartItems$.pipe(
      map(items => items.reduce((count, item) => count + (item.quantity ?? 0), 0)),
      startWith(0) // Startet mit 0, falls der Warenkorb leer ist
    );

    // Berechnung der Gesamtsumme der Warenkorbsprodukte
    this.cartTotal$ = this.cartService.cartItems$.pipe(
      map(items => items.reduce((total, item) => total + ((item.price ?? 0) * (item.quantity ?? 0)), 0)),
      startWith(0) // Startet mit 0, falls der Warenkorb leer ist
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  goToProfile() {
    // Navigation zur Profilseite
    console.log('Navigiere zur Profilseite');
  }

  logout() {
    // Logout-Logik implementieren
    console.log('Benutzer wurde ausgeloggt');
    this.isUserLoggedIn = false;
  }

  openAddUserDialog(){
    this.dialog.open(DialogForUserComponent)
  }
}
