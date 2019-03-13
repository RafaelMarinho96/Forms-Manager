import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

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
                path: 'form',
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