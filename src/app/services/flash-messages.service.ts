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
      setTimeout(() => {
        this.messages.shift()
      }, 7000);
  }
}
