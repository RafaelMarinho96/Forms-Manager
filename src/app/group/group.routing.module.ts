import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GroupAreaComponent } from "./group-area/group-area.component";
import { GroupContentComponent } from "./group-content/group-content.component";

const GROUP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'group'
    },
    {
        path: 'group',
        component: GroupAreaComponent
    },
    {
        path: 'group/:urlPath',
        component: GroupContentComponent
    },
    {
        path: 'my-group',
        component: GroupContentComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(GROUP_ROUTES)],
    exports: [RouterModule]
})

export class GroupRoutingModule {}