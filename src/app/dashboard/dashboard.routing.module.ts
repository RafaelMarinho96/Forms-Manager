import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { TableComponent } from "../shared/components/table/table.component";
import { FormBuilderComponent } from "../form/form-builder/form-builder.component";
import { FormComponent } from "../form/form.component";
import { GroupComponent } from "../group/group.component";

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'my-dashboard'
            },
            {
                path: 'my-dashboard',
                component: GroupComponent
            },
            {
                path: 'new-form',
                loadChildren: '../suite/suite.module#SuiteModule'
            },
            {
                path: 'renderer',
                loadChildren: '../suite/suite-renderer/suite-renderer.module#SuiteRendererModule'
            },
            {
                path: 'form-builder',
                component: FormBuilderComponent
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(dashboardRoutes) ],
    exports: [ RouterModule ]
})

export class DashboardRoutingModule{}