import { Component } from "@angular/core";

import { WizardValidatorService } from "src/app/shared/validators/wizard.validator.service";
import { FormGroup } from "@angular/forms";

@Component({
    templateUrl: 'wizard-settings.component.html',
    styleUrls: ['./wizard-settings.component.scss']
})

export class WizardSettingsComponent {

    form: FormGroup;
    levels: string [] = ['Protected','Public','Private'];

    constructor(private wizardValidatorService: WizardValidatorService){
        this.form = this.wizardValidatorService.form;
    }
}