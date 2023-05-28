import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule,Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 signupForm!:FormGroup
 textColor:string="red"
 errorMsgFontSize:number=.7
 

 constructor(private formBuilder:FormBuilder){
 
 }
  ngOnInit(){
    this.signupForm =this.formBuilder.group({
      firstname:['',[Validators.required,Validators.maxLength(2)]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['', [Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]]
  
    })
  
  
  }
  onSubmit(){
    if(this.signupForm.valid){
     console.log("successfull")
    }
    else{
      console.log("invalid")
    }
  }
}
