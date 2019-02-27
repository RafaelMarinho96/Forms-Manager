import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})

export class ResetPasswordComponent implements OnInit{
    
    constructor(
        private activateRoute: ActivatedRoute,
        private formBuilder: FormBuilder){}

    token: string;
    email: string;
    resetForm: FormGroup

    ngOnInit(): void {
        this.extractParams();
        this.resetForm = this.formBuilder.group({
            password: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(16)
                ]
            ],
            confirmPassword: ['', 
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(16)
                ]
            ],
        })
    }

    extractParams(){
        this.activateRoute.params.subscribe(
            (params: any) => {
                this.email = params['email'],
                console.log(this.email)
            }
        )

        this.activateRoute.queryParams.subscribe(
            (params => {
                this.token = params.token,
                console.log(this.token)
            })
        )
    }
}