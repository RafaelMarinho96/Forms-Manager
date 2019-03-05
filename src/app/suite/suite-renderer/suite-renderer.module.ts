import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SuiteRendererComponent } from "./suite-renderer.component";
import { SuiteRendererRoutingModule } from "./suite-renderer.routing.module";

@NgModule({
    declarations: [
        SuiteRendererComponent
    ],
    imports: [
        CommonModule,
        
        SuiteRendererRoutingModule
    ],
    exports: [],
    providers: []
})

export class SuiteRendererModule {}