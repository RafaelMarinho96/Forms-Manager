import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./form.component";
import { FormRoutingModule } from "./form.routing.module";
import { CardModule } from "../shared/components/card/card.module";
import { FormRendererComponent } from "./form-renderer/form-renderer.component";
import { ComponentsModule } from "../shared/components/components.module";


@NgModule({
    declarations: [
        FormComponent,
        FormRendererComponent
    ],
    imports: [
        CommonModule,
        FormRoutingModule,
        CardModule,
        ComponentsModule
    ],
    exports: [],
    providers: []
})

export class FormModule {}