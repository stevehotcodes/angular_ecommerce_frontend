import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule,FormControl } from '@angular/forms';
import { IcartItem, Iproduct } from 'src/app/interfaces';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 items:IcartItem[] = []
 total:number = this.items.reduce((accum:number, curr:IcartItem) => {
  return accum + (curr.price * curr.quantity)
 }, 0)

 checkoutForm!:FormGroup

 constructor(){}

 ngOnInit(): void {
   this.checkoutForm=new FormGroup({
      customerName: new FormControl(''),
      town:new FormControl(''),
      email:new FormControl('')
   })
 }
}
