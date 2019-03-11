import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { WizardValidatorService } from "src/app/shared/validators/wizard.validator.service";

@Component({
    templateUrl: './wizard-data.component.html',
    styleUrls: ['./wizard-data.component.scss']
})

export class WizardDataComponent implements OnInit{

    formModel: FormGroup;

    constructor(private wizardValidatorService: WizardValidatorService){
        this.formModel = this.wizardValidatorService.formModel;
    }

    ngOnInit(): void {

    }
}