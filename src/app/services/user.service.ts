import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InewUserData, IuserCredentials, IuserData } from '../interfaces';
import { FlashMessagesService } from './flash-messages.service';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    baseUrl: string
    constructor(private client: HttpClient, private flashSvc: FlashMessagesService, private authSvc:AuthService) {
        this.baseUrl = 'http://localhost:4000/users'
    }

    signup(newUserData: InewUserData) {
        this.client.post(this.baseUrl, newUserData).subscribe((res: any) => {
            this.flashSvc.pushMessage({
                type: 'success',
                message: res.message
            })    
        },
        (error: any) => {
            switch (error.status) {
                case 400:
                    this.flashSvc.pushMessage({
                        type: 'error',
                        message: 'Client Error: ' + error.error.message
                    })                        
                    break
                default:
                    this.flashSvc.pushMessage({
                        type: 'error',
                        message: 'Server Error' + error.error.message
                    })      
            }
        }
        )
    }

    signin(userCredentials:IuserCredentials) {
        this.client.post(this.baseUrl + '/signin', userCredentials).subscribe(
            (res:any) => {
                this.authSvc.signin({email:res.email, token:res.token})
                this.flashSvc.pushMessage({
                    type: 'success',
                    message: res.message
                })
            },
            (error:any) => {
                this.flashSvc.pushMessage({
                    type: 'error',
                    message: error.error.message
                })                     
            }
        )
    }

    signout() {

    }

    getSignedInUser():Observable<IuserData> {
        return this.client.get<IuserData>(this.baseUrl + '/user')
    }
}
