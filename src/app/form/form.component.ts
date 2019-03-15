import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { FormModel } from "../core/models/form.model";
import { FormService } from "../core/services/form.service";
import { RouterService } from "../core/services/router.service";


@Component({
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{
    
    forms: FormModel;
    formActive: boolean;
    urlPath: string;

    constructor(
        private formService: FormService,
        private route: ActivatedRoute){
            this.route.params.subscribe(
                (param: any) => {
                    this.urlPath = param['urlPath']
                }
            )
        }
    
    ngOnInit(): void {
        this.formService.getFormByName(this.urlPath).subscribe(
            (form) => {
                this.forms = form,
                console.log(form)
            },
            (err) => {
                console.log(err)
            }
        )
        this.route.queryParams.subscribe(
            (param: any) => {
                this.formActive = param['publish']
            },
            (err) => {
                console.log(err)
            }
        )
    }

    
}