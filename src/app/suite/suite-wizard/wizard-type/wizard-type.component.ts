import { Component, ElementRef, Renderer, ViewChild } from "@angular/core";

@Component({
    templateUrl: './wizard-type.component.html',
    styleUrls: ['./wizard-type.component.scss']
})

export class WizardTypeComponent {

    @ViewChild('radio', {read: ElementRef}) radio: ElementRef<HTMLInputElement>;

    constructor(){}

    isChecked(){
        if(this.radio.nativeElement.checked){
            console.log('true')
        }
    }
}