import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcartItem } from 'src/app/interfaces';
// import { cartItems } from 'src/dummydata';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule, IonicModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 cartItems:IcartItem[] = []
 cartTotal:number = 0
//  cartTotal:number = cartItems.reduce((accum:number, curr:ICartItem) => {
//   return accum + (curr.price * curr.quantity)
//  }, 0)
}
