import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcartItem } from 'src/app/interfaces';
// import { cartItems } from 'src/dummydata';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule, IonicModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    cartItems:any[] = []
    cartTotal!:number 

    constructor(private cartSvc:CartService) {
        this.cartSvc.getCart().subscribe(
          (res) => {
           this.cartItems = res
           this.cartTotal = this.cartItems.reduce((accum:number,curr:any)=>{
            return accum + curr.price * curr.quantity

           },0)
          },
          (error) => {
            
          }
        )
    }
 
}