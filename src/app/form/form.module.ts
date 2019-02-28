import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormComponent } from "./form.component";
import { WizardNavigationModule } from "../shared/layout/wizard-navigation/wizard-navigation.module";

@NgModule({
    declarations: [
        FormComponent
    ],
    imports: [
        CommonModule,
        WizardNavigationModule
    ],
    exports: [],
    providers: []
})

export class FormModule {}