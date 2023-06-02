import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';
import { Iorder } from 'src/app/interfaces';
import { dateFormatter } from 'src/app/helpers';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-orders',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    orders!: Iorder[]

    constructor(private orderSvc: OrderService) {

    }

    ngOnInit(): void {
        this.orderSvc.getOrders().subscribe(data => {
            this.orders = data
        },
        (error) => {

        }
        )
    }
}
