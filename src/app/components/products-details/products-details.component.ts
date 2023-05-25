import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from 'src/app/interfaces';
import { products } from 'src/dummydata';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule ,RouterModule,IonicModule],
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
 products:IProduct[]=products

}
