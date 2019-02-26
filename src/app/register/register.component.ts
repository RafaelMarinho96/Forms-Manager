import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailValidatorService } from "../core/services/email.validator.service";

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit{
    
    registerForm: FormGroup;
    
    constructor(
        private formBuilder: FormBuilder,
        private emailValidatorService: EmailValidatorService){}
    
    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            name: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(18)
                ]
            ],
            lastname: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]   
            ],
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ],
                this.emailValidatorService.emailIsAvailable() 
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(16)
                ] 
            ],
            passwordConfirm: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(16)
                ] 
            ]
        })
    }

}