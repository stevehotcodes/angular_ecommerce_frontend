import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iorder, IorderSuccessResponse, IorderWithInfo } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private baseUrl: string

    constructor(private client: HttpClient) {
        this.baseUrl = `${environment.apiUrl}orders/`
    }

    makeOrder(): Observable<IorderSuccessResponse> {
        return this.client.post<IorderSuccessResponse>(this.baseUrl, {})
    }

    getOrders():Observable<Iorder[]> {
        return this.client.get<Iorder[]>(this.baseUrl)
    }

    getOrder(id:string):Observable<IorderWithInfo> {
        return this.client.get<IorderWithInfo>(this.baseUrl + id)
    }
}
