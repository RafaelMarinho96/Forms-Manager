import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { FormService } from "src/app/core/services/form.service";
import { FormModel } from "src/app/core/models/form.model";
import { GroupService } from "src/app/core/services/group.service";

declare var $: any;
var fbEditor = document.getElementById('fb-editor');
var formBuilder = $(fbEditor).formBuilder();


@Component({
    templateUrl: './form-builder.component.html',
    styleUrls: ['./form-builder.component.scss']
})

export class FormBuilderComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private formService: FormService,
        private groupService: GroupService,
        private router: Router
    ){}

    options = {
        disableFields: [
          'autocomplete',
          'file',
          'date',
          'paragraph',
          'header',
          'button'
        ]
    }

    inscription: Subscription;
    form: FormModel = new FormModel();

    ngOnInit(): void {
        $(document.getElementById('fb-editor')).formBuilder(this.options);

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

    onSaveFormModel(){
        this.formService.postFormModel(this.form._id, formBuilder.formData).subscribe(
            (form) => {console.log(form), this.router.navigate(['/dashboard/group/', this.groupService.getGroupUrlPath()])},
            (err) => {console.log(err)}
        )
    }
}