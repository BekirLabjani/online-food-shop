import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { collection, Firestore, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() category: any; // 🔹 Kategorie-Daten aus der Eltern-Komponente empfangen

}