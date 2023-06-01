import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IuserData } from 'src/app/interfaces';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData!:IuserData
  userDataForm!:FormGroup

  constructor(private userSvc:UserService, private formBuilder:FormBuilder) {
    this.userDataForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
    this.getUser()
  }

    getUser() {
    this.userSvc.getSignedInUser().subscribe(
        data => {
        this.userData = data
        this.userDataForm.setValue(
            {
            firstname: this.userData.firstname,
            lastname: this.userData.lastname,
            email: this.userData.email,
            password: ''
            })
        })
    }

    updateUser() {

    }
}
