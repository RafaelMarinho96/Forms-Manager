import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

    constructor(private formGroup: FormGroup){}

    register: FormGroup;
}