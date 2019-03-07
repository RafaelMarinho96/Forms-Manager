import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SuiteRendererComponent } from "./suite-renderer.component";
import { NotFoundComponent } from "src/app/shared/pages/not-found/not-found.component";

const RENDERER_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: NotFoundComponent
            },
            {
                path: ':type',
                children: [
                    {
                        path: ':id',
                        component: SuiteRendererComponent
                    }
                ]
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(RENDERER_ROUTES) ],
    exports: [ RouterModule ]
})

export class SuiteRendererRoutingModule {}