import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule,FormControl } from '@angular/forms';
import { products } from 'src/dummydata';
import { IProduct } from 'src/app/interfaces';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 product:IProduct[]=products
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
