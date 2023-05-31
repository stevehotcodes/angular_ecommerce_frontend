import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string
  
  constructor(private client:HttpClient) { 
    this.baseUrl = 'http://localhost:4000'
  }

  getAllProducts():Observable<IProduct[]>{
    return this.client.get<IProduct[]>(this.baseUrl + '/products')
  }
  getProduct(){
    return this.client.get<IProduct[]>(this.baseUrl + "/product/id")
  }
  
}
