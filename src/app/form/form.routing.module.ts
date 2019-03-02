import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./form.component";
import { FormDataComponent } from "./form-wizard/form-data/form-data.component";
import { FormTypeComponent } from "./form-wizard/form-type/form-type.component";
import { FormSettingsComponent } from "./form-wizard/form-settings/form-settings.component";
import { FormBuilderComponent } from "./form-builder/form-builder.component";

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
            },
            {
                path: '2',
                component: FormTypeComponent
            },
            {
                path: '3',
                component: FormSettingsComponent
            },
            {
                path: '4',
                component: FormBuilderComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(FORM_ROUTES)],
    exports: [RouterModule]
})

export class FormRoutingModule {}