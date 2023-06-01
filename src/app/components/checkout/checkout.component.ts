import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { IcartItem } from 'src/app/interfaces';
import { CartService } from 'src/app/services/cart.service';


@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
    items!: IcartItem[]
    total!: number

    constructor(private cartSvc: CartService) {
        this.items = cartSvc.cartItems
        this.total = cartSvc.cartTotal
    }

}
