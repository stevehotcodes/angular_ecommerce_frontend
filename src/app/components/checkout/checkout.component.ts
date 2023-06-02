import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { IcartItem, IorderSuccessResponse, IuserData } from 'src/app/interfaces';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { OrderService } from 'src/app/services/order.service';
import { FlashMessagesService } from 'src/app/services/flash-messages.service';


@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnChanges {
    items!: IcartItem[]
    total!: number
    userInfo!:IuserData

    constructor(public cartSvc: CartService, private userSvc:UserService, private orderSvc:OrderService, private flash:FlashMessagesService) {
        this.items = cartSvc.cartItems
        this.total = cartSvc.cartTotal
        this.userSvc.getSignedInUser().subscribe(data => {
            this.userInfo = data
        },
        error => {
        }
        )
    }
    
    ngOnChanges(changes: SimpleChanges) {
        
      }

    makeOrder() {
        this.orderSvc.makeOrder().subscribe(
            (res:IorderSuccessResponse) => {
                this.flash.pushMessage({
                    type: 'success',
                    message: res.message
                })
                this.cartSvc.updateCartItems()
            },
            (error) => {
                this.flash.pushMessage({
                    type: 'error',
                    message: error.message || 'Unknown Error occured'
                })
            }
        )
    }

}
