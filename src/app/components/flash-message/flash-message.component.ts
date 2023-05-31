import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashMessagesService } from 'src/app/services/flash-messages.service';
import { IflashMessage } from 'src/app/interfaces';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-flash-message',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './flash-message.component.html',
  styleUrls: ['./flash-message.component.css']
})
export class FlashMessageComponent {
  @Input() message!:IflashMessage
}
