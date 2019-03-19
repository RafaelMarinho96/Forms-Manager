import { Component, OnInit, Input } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { FormService } from "src/app/core/services/form.service";
import { FormModel } from "src/app/core/models/form.model";
import { AnswerService } from "src/app/core/services/answer.service";
import { AnswerModel } from "src/app/core/models/answer.model";
import { GroupService } from "src/app/core/services/group.service";

declare var $: any;

@Component({
    selector: 'app-form-renderer',
    templateUrl: './form-renderer.component.html',
    styleUrls: ['./form-renderer.component.scss']
})

export class FormRendererComponent implements OnInit{

    urlPath: string;
    formId: string;
    form: FormModel = new FormModel();
    private answer: AnswerModel = new AnswerModel();

    constructor(
        private formService: FormService,
        private groupService: GroupService,
        private answerService: AnswerService,
        private router: Router){}

    ngOnInit(): void {
        this.urlPath = this.formService.getFormUrlPath();

        this.formService.getFormByUrlPath(this.urlPath).subscribe(
            (form) => {
                this.formId = form.form[0]._id;
                $('.fb-render').formRender({
                    dataType: 'json',
                    formData: form.form[0].form
                });
            },
            (err) => {
                console.log(err)
            }
        )
    }

    onSaveForm(){
        this.answer.form._id = this.formId;
        this.answer.group._id = this.groupService.getGroupId();
        this.answer.answer = $('.fb-render').formRender("userData");

        this.answerService.postAnswer(this.answer).subscribe(
            (form) => {
                console.log(form),
                this.router.navigate(['form', this.urlPath])
            },
            (err) => {
                console.log(err)
            }
        )
    }
}