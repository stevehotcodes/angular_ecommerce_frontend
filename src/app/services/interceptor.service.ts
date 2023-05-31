import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  token:string = ''

  constructor(private authSvc:AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
    const loggedUser = this.authSvc.getLoggedUser()
    this.token =  loggedUser ? loggedUser.token : '' 

    let modifiedRequest = req.clone({
      headers: new HttpHeaders().append('token', this.token)
    })
    return next.handle(modifiedRequest)
  }
}
