import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { FormService } from "src/app/core/services/form.service";
import { FormModel } from "src/app/core/models/form.model";

declare var $: any;
var fbEditor = document.getElementById('fb-editor');
var formBuilder = $(fbEditor).formBuilder();
var options = {
    disableFields: [
      'autocomplete',
      'file',
      'date',
      'paragraph',
      'header',
      'button'
    ],
    onSave: function(formData) {
        console.log(formBuilder.formData)
    }
}

@Component({
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})

export class FormBuilderComponent implements OnInit {

    inscription: Subscription;
    form: FormModel = new FormModel();

    constructor(
        private route: ActivatedRoute,
        private formService: FormService,
        private router: Router
    ){}

    ngOnInit(): void {
        $(document.getElementById('fb-editor')).formBuilder(options);

        this.inscription = this.route.params.subscribe(
            (params: any) => {
                this.form._id = params['id']
            }
        )

        this.formService
            .getForm(this.form._id)
            .subscribe(
                (form) => {
                    console.log(form)
                },
                (err) => {
                    console.log(err)
                }
            )
    }

    NgOnDestroy(): void{
        this.inscription.unsubscribe();
    }
}