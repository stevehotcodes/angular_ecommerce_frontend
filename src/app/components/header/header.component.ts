import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular'
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchForm  = new FormGroup({
    query: new FormControl()
  })
  loggedUser:any // placeholder

  constructor(private UserSvc:UserService) {
    this.loggedUser = UserSvc.loggedUser
  }
}
