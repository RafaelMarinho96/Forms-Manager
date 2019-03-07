import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { FormService } from "src/app/core/services/form.service";


declare var $: any;

@Component({
    templateUrl: './suite-renderer.component.html',
    styleUrls: ['./suite-renderer.component.scss']
})

export class SuiteRendererComponent implements OnInit{
    
    inscription: Subscription;
    id: any;
    type: any;
    formData: any = [];

    constructor(
        private activateRoute: ActivatedRoute,
        private formService: FormService){}

    ngOnInit(): void {
        this.inscription = this.activateRoute.params.subscribe(
            (params: any) => {
                this.id = params['id'],
                this.type = params['type']
            }
        )

        this.getForm(this.id);
    }

    ngOnDestroy(){
        this.inscription.unsubscribe();
    }

    getForm(id: string){
        this.formService.getForm(id)
            .subscribe(
                (form) => {
                    $('.fb-render').formRender({
                        dataType: 'json',
                        formData: form.form.form
                      });
                },
                (err) => {
                    console.log(err)
                    return null
                }
            );
    }

}