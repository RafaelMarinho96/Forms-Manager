import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const GROUP_ROUTES: Routes = [
    
]

@NgModule({
    imports: [RouterModule.forChild(GROUP_ROUTES)],
    exports: [RouterModule]
})

export class GroupRoutingModule {}