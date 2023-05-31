import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
// import { products } from 'src/dummydata';
import { RouterModule } from '@angular/router';
import { Iproduct } from 'src/app/interfaces';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-popular-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './popular-products.component.html',
  styleUrls: ['./popular-products.component.css']
})
export class PopularProductsComponent {
  products:Iproduct[] = []

  constructor(private productsService:ProductsService) {
    this.productsService.getAllProducts().subscribe(
      res=>{
        res.sort(() => Math.random() - 0.5)
        this.products=res.slice(0,16)
        
      }
    )
  }

  
}
