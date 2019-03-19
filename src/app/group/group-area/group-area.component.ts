import { Component, OnInit } from "@angular/core";

import { GroupService } from "src/app/core/services/group.service";
import { GroupModel } from "src/app/core/models/group.model";
import { FormService } from "src/app/core/services/form.service";

@Component({
    templateUrl: './group-area.component.html',
    styleUrls: ['./group-area.component.scss']
})

export class GroupAreaComponent implements OnInit{

    groups: GroupModel;

    constructor(
        private groupService: GroupService,
        private formService: FormService){}

    ngOnInit(): void {
        this.groupService.removeGroup();
        this.formService.removeForm();
        
        
        this.groupService
            .getGroups()
            .subscribe(
                (group) => {this.groups = group},
                (err) => {console.log(err)}
            )
    }
}