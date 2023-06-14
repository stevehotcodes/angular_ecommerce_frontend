import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';

import { UserGuard } from './guards/user.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { CheckoutGuard } from './guards/checkout.guard';


const routes: Routes = [
  {path: '', component:MainpageComponent},
  {path:"signup" ,loadComponent:()=>import('./components/signup/signup.component').then(c=>c.SignupComponent), canActivate: [DeactivateGuard]},
  {path:"signin", loadComponent:()=>import('./components/signin/signin.component').then(c=>c.SigninComponent), canActivate: [DeactivateGuard]},
  {path:"products/:id", loadComponent:()=>import('./components/products-details/products-details.component').then(c=>c.ProductsDetailsComponent)},
  {path:"cart", loadComponent:()=>import('./components/cart/cart.component').then(c=>c.CartComponent)},
  {path:'checkout', loadComponent:()=>import('./components/checkout/checkout.component').then(c=>c.CheckoutComponent), canActivate: [UserGuard, CheckoutGuard]},
  {path: 'user', loadComponent:()=>import('./components/user-profile/user-profile.component').then(c=>c.UserProfileComponent), canActivate: [UserGuard]},
  {path:'all-products', loadComponent:()=>import('./components/display-products/display-products.component').then(c=>c.DisplayProductsComponent)},
  {path:'orders', loadComponent:()=>import('./components/orders/orders.component').then(c=>c.OrdersComponent), canActivate: [UserGuard]},
  {path:'order/:id', loadComponent:()=>import('./components/order/order.component').then(c=>c.OrderComponent), canActivate: [UserGuard]},
  {path: '**', loadComponent:()=>import('./components/not-found/not-found.component').then(c=>c.NotFoundComponent)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
