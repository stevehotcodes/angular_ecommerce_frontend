import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule, FormControl, Validators, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-signin',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    signinForm!: FormGroup
    textColor: string = "red"
    errorMsgFontSize: number = .7

    constructor(private formBuilder: FormBuilder, private userSvc:UserService) { }

    ngOnInit() {
        this.signinForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        })
    }

    onSubmit() {
        if (this.signinForm.valid) {
            this.userSvc.signin(this.signinForm.value)
        }
        else {
            console.log("invalid")
        }
    }

}
