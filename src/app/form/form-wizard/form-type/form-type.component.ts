import { Component, ElementRef, Renderer, ViewChild } from "@angular/core";

@Component({
    templateUrl: './form-type.component.html',
    styleUrls: ['./form-type.component.scss']
})

export class FormTypeComponent {

    @ViewChild('radio', {read: ElementRef}) radio: ElementRef<HTMLInputElement>;

    constructor(){}

    isChecked(){
        if(this.radio.nativeElement.checked){
            console.log('true')
        }
    }
}