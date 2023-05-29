import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from 'src/app/interfaces';
import { products } from 'src/dummydata';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.css']
})
export class RecommendedProductsComponent {
  products:Product[] = products.sort(() => Math.random() - 0.5).slice(0,4)
}
