import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./form.component";
import { FormRendererComponent } from "./form-renderer/form-renderer.component";

const FORM_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: ':urlPath',
                component: FormComponent
            },
            {
                path: ':urlPath/new',
                component: FormRendererComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(FORM_ROUTES)],
    exports: [RouterModule]
})

export class FormRoutingModule {}