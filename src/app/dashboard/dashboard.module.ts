import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./dashboard.component";
import { NavbarComponent } from "../shared/layout/navbar/navbar.component";
import { TableComponent } from "../shared/components/table/table.component";
import { DashboardRoutingModule } from "./dashboard.routing.module";

@NgModule({
    declarations: [
        NavbarComponent,
        DashboardComponent,
        TableComponent        
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    exports: [],
    providers: []
})

export class DashboardModule {}