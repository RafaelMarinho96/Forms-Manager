import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";

import { WizardValidatorService } from "src/app/shared/validators/wizard.validator.service";
import { FormService } from "src/app/core/services/form.service";
import { Form } from "src/app/core/models/form.model";


@Component({
    templateUrl: './suite-wizard.component.html',
    styleUrls: ['./suite-wizard.component.scss']
})

export class SuiteWizardComponent implements OnInit {
    
    formModel: FormGroup;
    private form: Form = new Form();

    constructor(
        private wizardValidatorService: WizardValidatorService,
        private formService: FormService,
        private router: Router){
        this.formModel = this.wizardValidatorService.formModel;
    }
    
    ngOnInit(): void {
        
    }

    onSaveForm(){
        let name = this.formModel.get('name').value;
        let type = this.formModel.get('type').value;
        let access = this.formModel.get('access').value;
        let author = this.formModel.get('author').value;
        let description = this.formModel.get('description').value;
        let members = this.formModel.get('members').value; 

        this.formService.postForm('5c81ce945d923d413c2c5b6a', name, description, access, members, [])
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