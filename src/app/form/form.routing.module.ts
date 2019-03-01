import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./form.component";
import { FormDataComponent } from "./form-wizard/form-data/form-data.component";

const FORM_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'step'
    },
    {
        path: 'step',
        component: FormComponent,
        children:[
            {
                path: '',
                redirectTo: '1'
            },
            {
                path: '1',
                component: FormDataComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(FORM_ROUTES)],
    exports: [RouterModule]
})

export class FormRoutingModule {}