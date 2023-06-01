import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonicModule} from '@ionic/angular'
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { IloggedUser } from 'src/app/interfaces';
import { CartService } from 'src/app/services/cart.service';


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

  loggedUser!:IloggedUser | null
  cartCounter!:number

  constructor(private AuthSvc:AuthService, public cart:CartService) {
    this.AuthSvc.getLoggedUser().subscribe(user => {
      this.loggedUser = user
    })   
  }
  
  signOut() {
    this.AuthSvc.signout()
  }
}
