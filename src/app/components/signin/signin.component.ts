import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup,ReactiveFormsModule,FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 signinForm!:FormGroup
 textColor:string="red"
 errorMsgFontSize:number=.7
  
constructor(private formBuilder:FormBuilder){}
ngOnInit() {
  this.signinForm=this.formBuilder.group({
     email:['', [Validators.required,Validators.email]],
     password:['', [Validators.required]]
  })
}
onSubmit(){
  if(this.signinForm.valid){
     console.log("sign in successful")
  }
  else{
    console.log("invalid")
  }
}

}
