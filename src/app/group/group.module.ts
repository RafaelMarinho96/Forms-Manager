import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GroupComponent } from "./group.component";
import { CardModule } from "../shared/components/card/card.module";

@NgModule({
    declarations: [
        GroupComponent
    ],
    imports: [
        CommonModule,

        CardModule
    ],
    exports: [
        GroupComponent
    ],
    providers: []
})

export class GroupModule {}