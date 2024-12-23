import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowPrdctCardsComponent } from './show-prdct-cards/show-prdct-cards.component';

@Component({
  selector: 'app-show-prdct-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ShowPrdctCardsComponent],
  templateUrl: './show-prdct-list.component.html',
  styleUrl: './show-prdct-list.component.scss'
})
export class ShowPrdctListComponent {

}