import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Iproduct } from 'src/app/interfaces';
// import { products } from 'src/dummydata';
import { RouterModule } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-recommended-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.css'],
})
export class RecommendedProductsComponent implements OnInit {
  products: Iproduct[] = [];
  // products.sort(() => Math.random() - 0.5).slice(0,4)
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(
      (res) => {
        this.products = res.sort(() => Math.random() - 0.5).slice(0, 4);
      },
      (err) => {}
    )
  }
}
