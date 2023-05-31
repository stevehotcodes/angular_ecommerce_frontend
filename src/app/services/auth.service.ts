import { Injectable } from '@angular/core';
import { IloggedUser } from '../interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: IloggedUser | null
  baseUrl:string

  constructor(private client:HttpClient) {
    this.loggedUser = this.getLoggedUser()
    this.baseUrl = 'http://localhost:4000/users'
  }

  signin(loggedUser:IloggedUser) {
    localStorage.setItem('grabiaLoggedUserEmail', loggedUser.email)
    localStorage.setItem('grabiaLoggedUserToken', loggedUser.token)
    this.loggedUser = this.getLoggedUser()
  }

  getLoggedUser() {
    const email = localStorage.getItem('grabiaLoggedUserEmail')
    const token = localStorage.getItem('grabiaLoggedUserToken')
    this.loggedUser = email && token ? {email, token} : null

    return this.loggedUser
  }

  signout() {
    localStorage.removeItem('grabiaLoggedUserEmail')
    localStorage.removeItem('grabiaLoggedUserToken')
    this.loggedUser = this.getLoggedUser()
  }

  isAdmin():Observable<any> {
    if (!this.loggedUser) {
      return new Observable(observer => {
        observer.next(false)
        observer.complete()
      })
    }
    return this.client.get(this.baseUrl + '/user')
  }
  
}
