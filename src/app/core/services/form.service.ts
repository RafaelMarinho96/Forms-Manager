import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { ApiService } from "./api.service";
import { FormModel } from "../models/form.model";

@Injectable({
    providedIn: 'root'
})

export class FormService {

    //form: Form = new Form();

    constructor(private apiService: ApiService){}

    getForm(id: string){
        return this.apiService.get('/form/' + id);
    }

    getFormByName(urlPath: string){
        return this.apiService.get('/form/' + urlPath + '/urlPath');
    }

    postForm(form: FormModel){
        return this.apiService.put('/group/push/' + form.group._id, {
            forms: [{
                name: form.name,
                description: form.description,
                form: form.form
            }]
        }).pipe(map(res => {
            return res.body;
        }))
    }

    postFormModel(formId: string, formData: Object){
        console.log(formId)
        return this.apiService.put('/form/push/' + formId, { 
            form: formData });
    }
}