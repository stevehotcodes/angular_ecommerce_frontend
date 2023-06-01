import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iproduct } from 'src/app/interfaces';
// import { products } from 'src/dummydata';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products.service';


@Component({
	selector: 'app-products-details',
	standalone: true,
	imports: [CommonModule, RouterModule, IonicModule],
	templateUrl: './products-details.component.html',
	styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {
	id!: number
	product!: Iproduct

	constructor(private productsService: ProductsService, private route:ActivatedRoute) {
	}

	ngOnInit(): void {
		this.id = this.route.snapshot.params['id']
		this.productsService.getProduct(this.id).subscribe(data => {
			this.product = data
		})
	}
}



