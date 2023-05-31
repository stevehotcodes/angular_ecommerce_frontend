import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular'
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IloggedUser } from 'src/app/interfaces';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchForm  = new FormGroup({
    query: new FormControl()
  })

  loggedUser:IloggedUser | null

  constructor(private AuthSvc:AuthService) {
    this.loggedUser = AuthSvc.loggedUser
  }

  signOut() {
    this.AuthSvc.signout()
  }
}
