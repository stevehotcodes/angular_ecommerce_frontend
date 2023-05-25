import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

const routes: Routes = [
  {path: '', component:MainpageComponent},
  {path:"signup", component:SignupComponent},
  {path:"signin", component:SigninComponent},
  {path:"product-details", component:ProductsDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
