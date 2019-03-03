import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { HelperTextModule } from "../shared/components/helper-text/helper-text.module";
import { WizardNavigationModule } from "../shared/layout/wizard-navigation/wizard-navigation.module";
import { SuiteRoutingModule } from "./suite.routing.module";
import { SuiteWizardComponent } from "./suite-wizard/suite-wizard.component";
import { WizardDataComponent } from "./suite-wizard/wizard-data/wizard-data.component";
import { WizardTypeComponent } from "./suite-wizard/wizard-type/wizard-type.component";
import { WizardSettingsComponent } from "./suite-wizard/wizard-settings/wizard-settings.component";

@NgModule({
    declarations: [
        SuiteWizardComponent,
        WizardDataComponent,
        WizardTypeComponent,
        WizardSettingsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        WizardNavigationModule,
        SuiteRoutingModule,
        HelperTextModule
    ],
    exports: [],
    providers: []
})

export class SuiteModule {}