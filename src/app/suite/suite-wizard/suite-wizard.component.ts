import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";

import { WizardValidatorService } from "src/app/shared/validators/wizard.validator.service";
import { FormService } from "src/app/core/services/form.service";
import { FormModel } from "src/app/core/models/form.model";


@Component({
    templateUrl: './suite-wizard.component.html',
    styleUrls: ['./suite-wizard.component.scss']
})

export class SuiteWizardComponent implements OnInit {
    
    formModel: FormGroup;
    private form: FormModel = new FormModel();

    constructor(
        private wizardValidatorService: WizardValidatorService,
        private formService: FormService,
        private router: Router){
        this.formModel = this.wizardValidatorService.formModel;
    }
    
    ngOnInit(): void {
        
    }

    onSaveForm(){
        this.form.name = this.formModel.get('name').value;
        this.form.description = this.formModel.get('description').value;

        this.formService.postForm(this.form)
            .subscribe(
                form => {
                    this.form = form,
                    this.router.navigate(['form-builder', this.form._id])
                },
                (err) => {
                    console.log(err)
                }
            )
    }
}