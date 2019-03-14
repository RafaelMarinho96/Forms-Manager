import { Component, OnInit } from "@angular/core";
import { GroupService } from "../core/services/group.service";


@Component({
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{
    
    forms: any;
    constructor(
        private groupService: GroupService){}
    
    ngOnInit(): void {
        let groupId = this.groupService.getGroupId();
        this.groupService.getGroupById(groupId).subscribe(
            (forms) => {
                this.forms = forms.group.forms,
                console.log(this.forms)
            },
            (err) => {
                console.log(err)
            }
        )
    }

    
}