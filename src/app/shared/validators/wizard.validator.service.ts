import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class WizardValidatorService {

    form: FormGroup;
    
    constructor(private formBuilder: FormBuilder){
        this.form = this.formBuilder.group({
            name: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(20)
                ]
            ],
            author: ['Rafael Marinho'],
            description: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(140)
                ]
            ],
            members: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ]
        })
    }

}