import { Component, Input, OnInit } from "@angular/core";

import { GroupModel } from "src/app/core/models/group.model";
import { FormModel } from "src/app/core/models/form.model";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{
    
    @Input('cardData') data: GroupModel|FormModel|Object;
    @Input('cardIcon') icon: string;
    
    @Input('cardForm') isForm: boolean = true;

    constructor(){}

    ngOnInit(): void {
        
    }
}