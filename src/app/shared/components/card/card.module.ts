import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CardGroupComponent } from "./card-group/card-group.component";
import { CardFormComponent } from "./card-form/card-form.component";
import { CardIconComponent } from "./card-icon/card-icon.component";

@NgModule({
    declarations: [
        CardGroupComponent,
        CardFormComponent,
        CardIconComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CardGroupComponent,
        CardFormComponent,
        CardIconComponent
    ],
    providers: []
})

export class CardModule {}