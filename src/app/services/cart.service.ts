import { Injectable } from '@angular/core';
import { IcartItem, Iproduct } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    cartItem:IcartItem[] = []
    baseUrl:string

    constructor(private client:HttpClient) {
        this.baseUrl = "http://localhost:4000/cart"
    }

    addItemtoCart(productID:string):Observable<{message:string}>{
        return this.client.post<{message:string}>(this.baseUrl, {productID})
    }
    
    getCart():Observable<any>{
        return this.client.get<any>(this.baseUrl)
    }
}
