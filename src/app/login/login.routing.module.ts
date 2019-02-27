import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const LOGIN_ROUTES: Routes = [
    {
        path: 'reset-password/:token',
        component: ResetPasswordComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(LOGIN_ROUTES)],
    exports: [RouterModule]
})

export class LoginRoutingModule {}