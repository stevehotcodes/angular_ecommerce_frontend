import { Injectable } from '@angular/core';
import { IflashMessage } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashMessagesService {
  private messages:IflashMessage[] = []

  constructor() { }

  getMessages() {
    return this.messages
  }

  pushMessage (message:IflashMessage) {
    this.messages.push(message)
    // const index = this.messages.length - 1
    // return new Observable((observer) => {
      setTimeout(() => {
        // this.messages.splice(index,1)
        // console.log(index);
        this.messages.shift()
        // observer.next(this.messages)
        // observer.complete()
      }, 7000);
    // })
    
  }
}
