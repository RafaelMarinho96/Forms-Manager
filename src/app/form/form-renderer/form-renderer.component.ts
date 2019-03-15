import { Component, OnInit, Input } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { FormService } from "src/app/core/services/form.service";
import { FormModel } from "src/app/core/models/form.model";


declare var $: any;

@Component({
    selector: 'app-form-renderer',
    templateUrl: './form-renderer.component.html',
    styleUrls: ['./form-renderer.component.scss']
})

export class FormRendererComponent implements OnInit{

    @Input('FormData') FormData: Object;

    constructor(
        private activateRoute: ActivatedRoute,
        private formService: FormService){}

    ngOnInit(): void {
        console.log(this.FormData)
        $('.fb-render').formRender({
            dataType: 'json',
            formData: this.FormData
        })
    }

}