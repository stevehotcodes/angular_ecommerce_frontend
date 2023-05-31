import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../interfaces';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string
  
  constructor(private client:HttpClient) { 
    this.baseUrl = 'http://localhost:4000/products'
  }

  getAllProducts():Observable<Iproduct[]>{
    return this.client.get<Iproduct[]>(this.baseUrl)
  }
  getProduct(id:number):Observable<Iproduct>{
    return this.client.get<Iproduct>(this.baseUrl + "/" + id)
  }
  
}
