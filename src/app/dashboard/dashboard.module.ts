import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./dashboard.component";
import { NavbarComponent } from "../shared/layout/navbar/navbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        DashboardComponent        
    ],
    imports: [
        CommonModule
    ],
    exports: [],
    providers: []
})

export class DashboardModule {}