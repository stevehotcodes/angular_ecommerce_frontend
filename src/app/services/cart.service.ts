import { Injectable } from '@angular/core';
import { IcartItem, Iproduct } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CartService {
    cartItems:IcartItem[] = []
    cartTotal:number = 0
    private baseUrl:string

    constructor(private client:HttpClient) {
        this.baseUrl = `${environment.apiUrl}cart/`
        this.updateCartItems()
    }

    addItemtoCart(productID:string):Observable<{message:string}>{
        return this.client.post<{message:string}>(this.baseUrl, {productID})
    }
    
    getCart():Observable<IcartItem[]>{
        return this.client.get<IcartItem[]>(this.baseUrl)
    }
    
    updateCartItems() {
        this.getCart().subscribe(res => {
            this.cartItems = res
            this.cartTotal = this.cartItems.reduce((accum:number,curr:any)=>{
                return accum + curr.price * curr.quantity
    
               },0)
        },
        error => {
            this.cartItems = []
            this.cartTotal = 0
        }
        )
    }

    updateItem(itemID:string,quantity:number):Observable<{message:string}> {
        // if <= 0, go to remove
        return quantity > 0 ? this.client.patch<{message:string}>(this.baseUrl + itemID, {quantity}) : this.removeItem(itemID)
    }

    removeItem(itemID:string):Observable<{message:string}> {
        return this.client.delete<{message:string}>(this.baseUrl + itemID)
    }

    clearCart():Observable<{message:string}> {
        return this.client.delete<{message:string}>(this.baseUrl)
    }
}
