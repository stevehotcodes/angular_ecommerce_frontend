import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iproduct } from 'src/app/interfaces';
import { RouterModule } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { FlashMessagesService } from 'src/app/services/flash-messages.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!:Iproduct
  noImage:string

  constructor(private cartService:CartService, private flash:FlashMessagesService) {
      this.noImage = '../../../assets/Product-inside.png'
  }

  ngOnInit(): void {
    const img = new Image();
    img.src = this.product.images[0].imageURL;
    img.addEventListener('error', () => {
      this.product.images[0].imageURL = this.noImage
    });
  }

  addToCart(event:MouseEvent | KeyboardEvent){
    event.stopPropagation()
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

