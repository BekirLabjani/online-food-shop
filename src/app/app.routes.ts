import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CategoryPageComponent } from './main-page/category-page/category-page.component';
import { ShowPrdctListComponent } from './main-page/show-prdct-list/show-prdct-list.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'main-page', component: MainPageComponent },
    { path: 'category', component: CategoryPageComponent },
    { path: 'products/:id', component: ShowPrdctListComponent }, // Route für Produkte einer Kategorie
    { path: '**', redirectTo: '' }
];
