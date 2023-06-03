import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DisplayProductsComponent } from './components/display-products/display-products.component';
import { UserGuard } from './guards/user.guard';
import { DeactivateGuard } from './guards/deactivate.guard';
import { CheckoutGuard } from './guards/checkout.guard';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/order/order.component';


const routes: Routes = [
  {path: '', component:MainpageComponent},
  {path:"signup", component:SignupComponent, canActivate: [DeactivateGuard]},
  {path:"signin", component:SigninComponent, canActivate: [DeactivateGuard]},
  {path:"products/:id", component:ProductsDetailsComponent},
  {path:"cart", component:CartComponent},
  {path:'checkout', component:CheckoutComponent, canActivate: [UserGuard, CheckoutGuard]},
  {path: 'user', component:UserProfileComponent, canActivate: [UserGuard]},
  {path:'all-products', component:DisplayProductsComponent},
  {path:'orders', component:OrdersComponent, canActivate: [UserGuard]},
  {path:'order/:id', component:OrderComponent, canActivate: [UserGuard]},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
