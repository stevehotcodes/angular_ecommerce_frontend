import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '../carousel/carousel.component';
import { CategoriesComponent } from '../categories/categories.component';
import { PopularProductsComponent } from '../popular-products/popular-products.component';

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [CommonModule, CarouselComponent, CategoriesComponent, PopularProductsComponent],
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent {

}
