import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { products } from 'src/dummydata';
import { RouterModule } from '@angular/router';
import { IProduct } from 'src/app/interfaces';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.css']
})
export class PopularProductsComponent {
  products:IProduct[] = []

  constructor(private productsService:ProductsService) {
    this.productsService.getAllProducts().subscribe(
      res=>{
        this.products=res
        
      }
    )
  }

  
}
