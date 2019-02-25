import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent {
    forgotForm: FormGroup;
}