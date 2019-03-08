import { Component, OnInit } from "@angular/core";

import { WizardValidatorService } from "src/app/shared/validators/wizard.validator.service";
import { FormGroup } from "@angular/forms";
import { FormService } from "src/app/core/services/form.service";

@Component({
    templateUrl: './suite-wizard.component.html',
    styleUrls: ['./suite-wizard.component.scss']
})

export class SuiteWizardComponent implements OnInit {
    
    form: FormGroup;

    constructor(
        private wizardValidatorService: WizardValidatorService,
        private formService: FormService){
        this.form = this.wizardValidatorService.form;
    }
    
    ngOnInit(): void {
        
    }

    onSaveForm(){
        let name = this.form.get('name').value;
        let type = this.form.get('type').value;
        let access = this.form.get('access').value;
        let author = this.form.get('author').value;
        let description = this.form.get('description').value;
        let members = this.form.get('members').value; 

        this.formService.postForm('5c81ce945d923d413c2c5b6a', name, description, access, members, [])
            .subscribe(
                () => {
                    console.log('Cadastrado')
                },
                (err) => {
                    console.log(err)
                }
            )
    }
}