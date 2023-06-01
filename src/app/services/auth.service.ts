import { Injectable } from '@angular/core';
import { IloggedUser } from '../interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl:string

  constructor(private client:HttpClient) {
    this.baseUrl = `${environment.apiUrl}users/`
  }

  signin(loggedUser:IloggedUser) {
    localStorage.setItem('grabiaLoggedUserEmail', loggedUser.email)
    localStorage.setItem('grabiaLoggedUserToken', loggedUser.token)
    window.location.reload()
  }

  getLoggedUser():Observable<IloggedUser | null> {
    const email = localStorage.getItem('grabiaLoggedUserEmail')
    const token = localStorage.getItem('grabiaLoggedUserToken')
    const loggedUser = email && token ? {email, token} : null

    return new Observable(observer =>  {
      observer.next(loggedUser)
    })
  }

  signout() {
    localStorage.removeItem('grabiaLoggedUserEmail')
    localStorage.removeItem('grabiaLoggedUserToken')
    window.location.reload()
  }

  // isAdmin():Observable<any> {
  //   const token = localStorage.getItem('grabiaLoggedUserToken')
  //   if (!token) {
  //     return new Observable(observer => {
  //       observer.next(false)
  //       // observer.complete()
  //     })
  //   }
  //   return this.client.get(this.baseUrl + 'user')
  // }
  
}
