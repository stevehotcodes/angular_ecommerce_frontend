import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IuserData } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  userData!:IuserData

  constructor(private userSvc:UserService) {
    this.getUser()
  }

  getUser() {
    this.userSvc.getSignedInUser().subscribe(
      data => {
        this.userData = data
    })
  }
}
