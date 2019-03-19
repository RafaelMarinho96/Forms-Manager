import { Component, OnInit } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { FormModel } from "../core/models/form.model";
import { FormService } from "../core/services/form.service";
import { RouterService } from "../core/services/router.service";
import { AnswerService } from "../core/services/answer.service";
import { AnswerModel } from "../core/models/answer.model";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    providers: [NgbModalConfig, NgbModal]
})

export class FormComponent implements OnInit{

    forms: FormModel;
    modalAnswer: any;
    formId: any;
    answers: AnswerModel;
    answerT: AnswerModel;
    formActive: boolean;
    urlPath: string;
    
    constructor(
        private formService: FormService,
        private route: ActivatedRoute,
        private answerService: AnswerService,
        config: NgbModalConfig, private modalService: NgbModal){
            config.backdrop = 'static';
            config.keyboard = false;
        }

    ngOnInit(): void { 
        this.route.params.subscribe(
            (param: any) => {
                this.urlPath = param['urlPath']
            }
        )

        this.formService.setFormUrlPath(this.urlPath);

        this.answerService.getAnswerFormByUrlPath(this.urlPath).subscribe(
            (answers) => {
                this.answers = answers.answers[0].answer,
                console.log(this.answers)
            },
            (err) => {
                console.log(err)
            }
        )        
    }

    open(content) {
        this.route.queryParams.subscribe(
            (param: any) => {
                let formId = param['answer'];
                console.log(this.formId),
                this.answerService.getAnswerById(formId).subscribe(
                    (answer) => {
                        this.modalAnswer = answer.answer.answer
                        console.log(this.modalAnswer)
                    },
                    (err) => {
                        console.log(err)
                    }
                )
            }
        )

        this.modalService.open(content);
    }
      
}