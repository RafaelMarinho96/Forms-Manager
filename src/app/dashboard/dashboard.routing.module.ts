import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { TableComponent } from "../shared/components/table/table.component";
import { FormBuilderComponent } from "../form/form-builder/form-builder.component";
import { FormComponent } from "../form/form.component";
import { GroupAreaComponent } from "../group/group-area/group-area.component";

const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                loadChildren: '../group/group.module#GroupModule'
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
                loadChildren: '../suite/form-builder/form-builder.module#FormBuilderModule'
            }
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(dashboardRoutes) ],
    exports: [ RouterModule ]
})

export class DashboardRoutingModule{}