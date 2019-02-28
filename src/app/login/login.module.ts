import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HelperTextModule } from "../shared/components/helper-text/helper-text.module";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { LoginRoutingModule } from "./login.routing.module";
import { FormBuilderModule } from "../form-builder/form-builder.module";

@NgModule({
    declarations: [
        LoginComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,

        HelperTextModule,
        LoginRoutingModule,
        FormBuilderModule
    ],
    exports: [
        LoginComponent,
        ForgotPasswordComponent
    ],
    providers: []
})

export class LoginModule {}