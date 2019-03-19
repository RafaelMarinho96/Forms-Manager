import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./form.component";
import { FormRoutingModule } from "./form.routing.module";
import { CardModule } from "../shared/components/card/card.module";
import { FormRendererComponent } from "./form-renderer/form-renderer.component";
import { ComponentsModule } from "../shared/components/components.module";
import { FormModalComponent } from "./form-modal/form-modal.component";


@NgModule({
    declarations: [
        FormComponent,
        FormRendererComponent,
        FormModalComponent
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