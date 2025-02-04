import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { BasketListComponent } from "../basket-list/basket-list.component";
import { Observable, Subscription } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { GeneralFunctionsService } from '../../services/general-functions.service';
import { map, startWith } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialog } from '@angular/material/dialog'; // Importiere MatDialog
import { LoginComponent } from '../../authentication/login/login.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, BasketListComponent,CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  // isSidebarOpen = false;
  // cartItemCount$: Observable<number>;
  // cartTotal$: Observable<number>;
  // private cartSubscription!: Subscription;

  isUserLoggedIn = false; // Zustand, ob der Benutzer eingeloggt ist
  isDropdownOpen = false; // Zustand des Dropdown-Menüs

  user = {
    firstname: 'Bekir',
    lastname: 'Labjani',
    avatar: 'assets/img/user-avatar.png'
  };

  shortenedName: string = '';
  constructor(private cartService: CartService, private dialog: MatDialog, private generalService: GeneralFunctionsService ) {
    // Berechnung der Gesamtanzahl der Artikel im Warenkorb
    // this.cartItemCount$ = this.cartService.cartItems$.pipe(
    //   map(items => items.reduce((count, item) => count + (item.quantity ?? 0), 0)),
    //   startWith(0) // Startet mit 0, falls der Warenkorb leer ist
    // );

    // Berechnung der Gesamtsumme der Warenkorbsprodukte
    // this.cartTotal$ = this.cartService.cartItems$.pipe(
    //   map(items => items.reduce((total, item) => total + ((item.price ?? 0) * (item.quantity ?? 0)), 0)),
    //   startWith(0) // Startet mit 0, falls der Warenkorb leer ist
    // );
  }

  ngOnInit(): void {
    // this.formatUserName();
  }

  ngOnDestroy(): void {
    // if (this.cartSubscription) {
    //   this.cartSubscription.unsubscribe();
    // }

  }

  // toggleSidebar() {
  //   this.isSidebarOpen = !this.isSidebarOpen;
  // }

  // closeSidebar() {
  //   this.isSidebarOpen = false;
  // }

  // toggleDropdown() {
  //   this.isDropdownOpen = !this.isDropdownOpen;
  // }

  // goToProfile() {
  //   this.generalService.openProfile();
  // }

  // logout() {
  //   // Logout-Logik implementieren
  //   console.log('Benutzer wurde ausgeloggt');
  //   this.isUserLoggedIn = false;
  // }

  // openForUserDialog(){
  //   // this.dialog.open()
  // }

  // formatUserName(): void {
  //   console.log('Firstname:', this.user.firstname);
  //   console.log('Lastname:', this.user.lastname);
  //   this.shortenedName = `${this.user.firstname.slice(0, 1)} ${this.user.lastname.slice(0, 1)}`;
  //   console.log('Shortened Name:', this.shortenedName);
  // }



  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
      }
    });
  }
}

