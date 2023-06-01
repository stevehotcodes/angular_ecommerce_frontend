import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { Iproduct } from 'src/app/interfaces';
import { ProductCardComponent } from '../product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-display-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css'],
})
export class DisplayProductsComponent {
  products: Iproduct[] = []

  constructor(private productService: ProductsService) {
    this.productService.getAllProducts().subscribe(
      (res) => {
        this.products = res
      },
      (error) => {}
    )
  }
}
