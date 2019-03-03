import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SuiteWizardComponent } from "./suite-wizard/suite-wizard.component";
import { WizardDataComponent } from "./suite-wizard/wizard-data/wizard-data.component";
import { WizardTypeComponent } from "./suite-wizard/wizard-type/wizard-type.component";
import { WizardSettingsComponent } from "./suite-wizard/wizard-settings/wizard-settings.component";
import { FormBuilderComponent } from "./form-builder/form-builder.component";

const FORM_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'step'
    },
    {
        path: 'step',
        component: SuiteWizardComponent,
        children:[
            {
                path: '',
                redirectTo: '1'
            },
            {
                path: '1',
                component: WizardDataComponent
            },
            {
                path: '2',
                component: WizardTypeComponent
            },
            {
                path: '3',
                component: WizardSettingsComponent
            },
            {
                path: '4',
                component: FormBuilderComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(FORM_ROUTES)],
    exports: [RouterModule]
})

export class SuiteRoutingModule {}