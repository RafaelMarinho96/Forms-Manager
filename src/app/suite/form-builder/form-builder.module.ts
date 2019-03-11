import { NgModule } from "@angular/core";

import { FormBuilderComponent } from "./form-builder.component";
import { CommonModule } from "@angular/common";
import { FormBuilderRoutingModule } from "./form-builder.routing.module";

@NgModule({
    declarations: [
        FormBuilderComponent
    ],
    imports: [
        CommonModule,
        FormBuilderRoutingModule
    ],
    exports: [],
    providers: []
})

export class FormBuilderModule {}