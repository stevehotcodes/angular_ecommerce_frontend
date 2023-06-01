import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IcartItem } from 'src/app/interfaces';
// import { cartItems } from 'src/dummydata';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CartService } from 'src/app/services/cart.service';
import { FlashMessagesService } from 'src/app/services/flash-messages.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule, IonicModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
    constructor(public cartSvc:CartService, private flash:FlashMessagesService) {
    }

    updateCartItem(action:'remove' | 'decrement' | 'increment', item:IcartItem) {
        switch (action) {
            case 'remove':
                this.cartSvc.removeItem(item.id).subscribe(
                    (res)=>{
                      this.cartSvc.updateCartItems()
                    },
                    (error)=>{
                        this.flash.pushMessage({
                            type:"error",
                            message: error.message || "Unknown error occured"
                        }
                           
                        )
                    }
                )
                break
            case 'decrement':
                this.cartSvc.updateItem(item.id, item.quantity - 1).subscribe(
                    (res)=>{this.cartSvc.updateCartItems()},
                    (error)=>{
                        this.flash.pushMessage({
                            type:"error",
                            message: error.message || 'Unknown Error occured'
                        })
                    }
                )
                break

            case 'increment':
                this.cartSvc.updateItem(item.id, item.quantity + 1).subscribe(
                    (res) => {this.cartSvc.updateCartItems()},
                    (error) => {
                        this.flash.pushMessage(
                            {
                                type: 'error',
                                message: error.message || 'Unknown Error occured'
                            }
                        )
                    }
                )
                break

            default:
                break
        }
        
    }

    clearCart() {
        this.cartSvc.clearCart().subscribe(
            (res) => {
                this.cartSvc.updateCartItems()
                this.flash.pushMessage(
                    {
                        type: 'success',
                        message: res.message
                    }
                )
            },
            (error) => {
                this.flash.pushMessage(
                    {
                        type: 'error',
                        message: error.message || 'Unknown Error occured'
                    }
                )
            }
        )
    }
 
}