import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { GroupAreaComponent } from "./group-area/group-area.component";
import { CardModule } from "../shared/components/card/card.module";
import { GroupContentComponent } from "./group-content/group-content.component";
import { GroupRoutingModule } from "./group.routing.module";

@NgModule({
    declarations: [
        GroupAreaComponent,
        GroupContentComponent
    ],
    imports: [
        CommonModule,
        GroupRoutingModule,
        
        CardModule
    ],
    exports: [
        GroupAreaComponent
    ],
    providers: []
})

export class GroupModule {}