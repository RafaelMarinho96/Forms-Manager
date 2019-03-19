import { Component, Input, OnInit } from "@angular/core";

import { GroupModel } from "src/app/core/models/group.model";
import { FormModel } from "src/app/core/models/form.model";
import { AnswerModel } from "src/app/core/models/answer.model";

@Component({
    selector: 'app-card-icon',
    templateUrl: './card-icon.component.html',
    styleUrls: ['./card-icon.component.scss']
})

export class CardIconComponent implements OnInit{
    
    @Input('cardData') data: AnswerModel;
    @Input('cardIcon') icon: string;
    
    @Input('cardType') type: string;

    constructor(){}

    ngOnInit(): void {
        
    }
}