import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FormBuilderComponent } from "./form-builder.component";

const FORMBUILDER_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: ':id',
                component: FormBuilderComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(FORMBUILDER_ROUTES)],
    exports: [RouterModule]
})

export class FormBuilderRoutingModule {}