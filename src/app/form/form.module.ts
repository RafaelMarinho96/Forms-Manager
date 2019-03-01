import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./form.component";
import { WizardNavigationModule } from "../shared/layout/wizard-navigation/wizard-navigation.module";
import { FormRoutingModule } from "./form.routing.module";
import { FormWizardComponent } from "./form-wizard/form-wizard.component";

@NgModule({
    declarations: [
        FormWizardComponent,
        FormComponent
    ],
    imports: [
        CommonModule,
        WizardNavigationModule,
        FormRoutingModule
    ],
    exports: [],
    providers: []
})

export class FormModule {}