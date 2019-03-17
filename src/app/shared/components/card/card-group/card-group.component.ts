import { Component, Input, OnInit } from "@angular/core";

import { GroupModel } from "src/app/core/models/group.model";
import { FormModel } from "src/app/core/models/form.model";

@Component({
    selector: 'app-card-group',
    templateUrl: './card-group.component.html',
    styleUrls: ['./card-group.component.scss']
})

export class CardGroupComponent implements OnInit{
    
    @Input('cardData') data: GroupModel|FormModel|Object;
    @Input('cardIcon') icon: string;
    
    @Input('cardType') type: string;

    constructor(){}

    ngOnInit(): void {
        
    }
}