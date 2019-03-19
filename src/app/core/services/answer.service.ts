import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";
import { AnswerModel } from "../models/answer.model";

@Injectable({
    providedIn: 'root'
})

export class AnswerService {

    constructor(private apiService: ApiService){}

    postAnswer(answer: AnswerModel){
        return this.apiService.put('/form/answer/' + answer.form._id, {
            answer: [{
                name: answer.name,
                answer: answer.answer
            }]
        });
    }

    getAnswerFormByFormId(formId: string){
        return this.apiService.get('/form/answer/' + formId + '/byFormId');
    }
}