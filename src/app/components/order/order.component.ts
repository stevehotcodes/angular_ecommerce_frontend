import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';
import { IorderWithInfo } from 'src/app/interfaces';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dateFormatter } from 'src/app/helpers';

@Component({
    selector: 'app-order',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css']
})
export class OrderComponent {
    order: IorderWithInfo | null = null
    id!: string
    orderTotal!:number

    constructor(private orderSvc: OrderService, private route: ActivatedRoute) {
        this.id = route.snapshot.params['id']
        orderSvc.getOrder(this.id).subscribe(
            (data: IorderWithInfo) => {
                this.order = data                
                this.orderTotal = this.order.items.reduce((accum, curr) => {
                    return accum + (curr.price * curr.quantity)
                },0)
            }
        )
    }
}
