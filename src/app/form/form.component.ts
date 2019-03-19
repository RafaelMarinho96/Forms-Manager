import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { FormModel } from "../core/models/form.model";
import { FormService } from "../core/services/form.service";
import { RouterService } from "../core/services/router.service";
import { AnswerService } from "../core/services/answer.service";
import { AnswerModel } from "../core/models/answer.model";


@Component({
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})

export class FormComponent implements OnInit{

    forms: FormModel;
    answers: AnswerModel;
    formActive: boolean;
    formId: string;
    
    constructor(
        private formService: FormService,
        private route: ActivatedRoute,
        private answerService: AnswerService){
        }

    ngOnInit(): void { 
        this.route.params.subscribe(
            (param: any) => {
                this.formId = param['formId']
            }
        )

        this.formService.setFormId(this.formId);

        this.answerService.getAnswerFormByFormId(this.formId).subscribe(
            (answers) => {
                this.answers = answers.answers.answer,
                console.log(this.answers)
            },
            (err) => {
                console.log(err)
            }
        )
    }
      
}