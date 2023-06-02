import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { FlashMessagesService } from 'src/app/services/flash-messages.service';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  textColor: string = "red"
  errorMsgFontSize: number = .7


  constructor(private formBuilder: FormBuilder, private userSvc: UserService, private client:HttpClient, public flashSvc:FlashMessagesService) {

  }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.signupForm.valid) {
      let newUserData = this.signupForm.value
      delete newUserData.confirmPassword
      this.userSvc.signup(newUserData)
    }
    else {
      this.flashSvc.pushMessage({
        type: 'error',
        message: 'Invalid form'
      })
    }
  }
}
