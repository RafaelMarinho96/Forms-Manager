import { Component, OnInit } from "@angular/core";

import { GroupService } from "src/app/core/services/group.service";
import { GroupModel } from "src/app/core/models/group.model";

@Component({
    templateUrl: './group-area.component.html',
    styleUrls: ['./group-area.component.scss']
})

export class GroupAreaComponent implements OnInit{

    groups: GroupModel;

    constructor(private groupService: GroupService){}

    ngOnInit(): void {
        this.groupService
            .getGroups()
            .subscribe(
                (group) => {this.groups = group},
                (err) => {console.log(err)}
            )
    }
}