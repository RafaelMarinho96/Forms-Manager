import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { EmailValidatorService } from "src/app/core/services/email.validator.service";

@Injectable({
    providedIn: 'root'
})

export class WizardValidatorService {

    formModel: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private emailValidatorService: EmailValidatorService){
        this.formModel = this.formBuilder.group({
            name: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ]
            ],
            //type: [''],
            access: [''],
            author: ['Rafael Marinho'],
            description: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(140)
                ]
            ]/*,
            members: ['',
                [
                    Validators.required,
                    Validators.email
                ],
                this.emailValidatorService.emailExists()
            ]*/
        })
    }

}