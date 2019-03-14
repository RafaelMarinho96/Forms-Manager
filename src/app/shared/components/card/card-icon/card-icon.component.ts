import { Component, Input, OnInit } from "@angular/core";

import { GroupModel } from "src/app/core/models/group.model";
import { FormModel } from "src/app/core/models/form.model";

@Component({
    selector: 'app-card-icon',
    templateUrl: './card-icon.component.html',
    styleUrls: ['./card-icon.component.scss']
})

export class CardIconComponent implements OnInit{
    
    @Input('cardData') data: GroupModel|FormModel|Object;
    @Input('cardIcon') icon: string;
    
    @Input('cardType') type: string;

    constructor(){}

    ngOnInit(): void {
        
    }
}