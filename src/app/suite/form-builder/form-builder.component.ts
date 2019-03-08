import { Component, OnInit } from "@angular/core";
declare var $: any;
var fbEditor = document.getElementById('fb-editor');
var formBuilder = $(fbEditor).formBuilder();

@Component({
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})

export class FormBuilderComponent implements OnInit {
    ngOnInit(): void {
        $(document.getElementById('fb-editor')).formBuilder();
    }

    onClick(){
        alert(formBuilder.formData);
    }
}