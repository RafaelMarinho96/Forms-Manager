import { Component, OnInit } from "@angular/core";

import { WizardValidatorService } from "src/app/shared/validators/wizard.validator.service";
import { FormGroup } from "@angular/forms";

@Component({
    templateUrl: './suite-wizard.component.html',
    styleUrls: ['./suite-wizard.component.scss']
})

export class SuiteWizardComponent implements OnInit {
    
    form: FormGroup;

    constructor(private wizardValidatorService: WizardValidatorService){
        this.form = this.wizardValidatorService.form;
    }
    
    ngOnInit(): void {
        
    }
}