import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iproduct } from '../interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseUrl:string
  
  constructor(private client:HttpClient) { 
    this.baseUrl = `${environment.apiUrl}products/`
  }

  getAllProducts():Observable<Iproduct[]>{
    return this.client.get<Iproduct[]>(this.baseUrl)
  }
  getProduct(id:number):Observable<Iproduct>{
    return this.client.get<Iproduct>(this.baseUrl + id)
  }
  
}
