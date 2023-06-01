import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iproduct } from 'src/app/interfaces';
// import { products } from 'src/dummydata';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';
import { FlashMessagesService } from 'src/app/services/flash-messages.service';


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

	constructor(private productsService: ProductsService, private route:ActivatedRoute, private cartService:CartService, private flash:FlashMessagesService) {
	}

	ngOnInit(): void {
		this.id = this.route.snapshot.params['id']
		this.productsService.getProduct(this.id).subscribe(data => {
			this.product = data
		})
	}

	addToCart(){
		console.log(this.product.id);
		
		this.cartService.addItemtoCart(this.product.id).subscribe(
		  (res)=>{
			this.flash.pushMessage(
			  {
				type:"success",
				message:res.message
			  }
			)
			this.cartService.updateCartItems()
		  },
		  (err)=>{
			this.flash.pushMessage(
			  {
				type:"error",
				message:err.message
			  }
			)
		  }
		)
	  }
}



