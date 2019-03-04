import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { BreadcrumbComponent } from "./breadcrumb.component";

@NgModule({
    declarations: [
        BreadcrumbComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        BreadcrumbComponent
    ],
    providers: []
})

export class BreadcrumbModule {}