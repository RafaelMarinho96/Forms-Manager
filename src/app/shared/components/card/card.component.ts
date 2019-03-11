import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{
    
    @Input('cardName') name: string;
    @Input('cardIcon') icon: string;
    @Input('cardUrl') url: string[];
    @Input('cardColor') color: string;
    @Input('cardBackground') background: string;
    
    constructor(){}

    ngOnInit(): void {
        console.log(this.icon)
    }
}