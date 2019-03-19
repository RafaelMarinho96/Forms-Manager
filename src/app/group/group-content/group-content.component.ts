import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { GroupService } from "src/app/core/services/group.service";
import { GroupModel } from "src/app/core/models/group.model";
import { FormModel } from "src/app/core/models/form.model";
import { FormService } from "src/app/core/services/form.service";

@Component({
    templateUrl: './group-content.component.html',
    styleUrls: ['./group-content.component.scss']
})

export class GroupContentComponent implements OnInit{

    inscription: Subscription;
    urlPath: string;
    formsGroup: GroupModel;
    forms: FormModel;

    constructor(
        private route: ActivatedRoute,
        private groupService: GroupService,
        private formService: FormService
    ){}

    ngOnInit(): void {
        this.formService.removeForm();
        this.inscription = this.route.params.subscribe(
            (params: any) => {
                this.urlPath = params['urlPath']
            }
        )

        this.onLoadGroupForms();
    }

    onLoadGroupForms(){
        this.groupService.getGroupFormByUrlPath(this.urlPath).subscribe(
            (forms) => {
                this.formsGroup = forms, 
                this.forms = this.formsGroup.forms,
                this.groupService.setGroupId(this.formsGroup._id),
                this.groupService.setGroupUrlPath(this.formsGroup.urlPath)
            },
            (err) => {console.log(err)}
        )
    }
}