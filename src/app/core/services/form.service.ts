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

    postForm(form: FormModel){
        return this.apiService.put('/group/push/' + '5c81ce945d923d413c2c5b6a', {
            forms: [{
                name: form.name,
                description: form.description,
                form: form.form
            }]
        }).pipe(map(res => {
            return res.body;
        }))
    }
}