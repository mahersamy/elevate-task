import { Routes } from '@angular/router';
import { HomeComponent } from './features/components/home/home.component';
import { ProductDetailsComponent } from './features/components/product-details/product-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path:'**',redirectTo:''}
];

