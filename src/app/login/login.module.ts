import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HelperTextModule } from "../shared/components/helper-text/helper-text.module";

@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        HelperTextModule
    ],
    exports: [
        LoginComponent,
        ForgotPasswordComponent
    ],
    providers: []
})

export class LoginModule {}