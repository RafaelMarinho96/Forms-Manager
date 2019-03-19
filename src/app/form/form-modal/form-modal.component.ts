import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'app-form-modal',
    templateUrl: './form-modal.component.html',
    styleUrls: ['./form-modal.component.scss']
})

export class FormModalComponent implements OnInit{

    @Input('') modalData;

    constructor(){}

    ngOnInit(): void {
        
    }

}