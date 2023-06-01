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
        })
    }
}
