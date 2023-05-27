import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/interfaces';
import { products } from 'src/dummydata';
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
 products:IProduct[]=products
}
