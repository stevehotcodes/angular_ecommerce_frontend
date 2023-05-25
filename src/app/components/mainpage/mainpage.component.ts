import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { CategoriesComponent } from '../categories/categories.component';
import { PopularProductsComponent } from '../popular-products/popular-products.component';
import { RecommendedProductsComponent } from '../recommended-products/recommended-products.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CategoriesComponent, PopularProductsComponent, RecommendedProductsComponent],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

}
