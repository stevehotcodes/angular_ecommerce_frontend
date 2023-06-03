import { Component } from '@angular/core';
import { IflashMessage } from './interfaces';
import { FlashMessagesService } from './services/flash-messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages:IflashMessage[]

  constructor(public flashMessagesSvc:FlashMessagesService) {
    this.messages = flashMessagesSvc.getMessages()
  }

}
