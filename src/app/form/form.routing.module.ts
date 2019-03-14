import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./form.component";

const FORM_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: ':urlPath',
                component: FormComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(FORM_ROUTES)],
    exports: [RouterModule]
})

export class FormRoutingModule {}