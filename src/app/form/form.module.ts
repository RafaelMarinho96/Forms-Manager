import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./form.component";
import { FormRoutingModule } from "./form.routing.module";
import { CardModule } from "../shared/components/card/card.module";


@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        CommonModule,
        FormRoutingModule,
        CardModule
    ],
    exports: [],
    providers: []
})

export class FormModule {}