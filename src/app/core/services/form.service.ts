import { Injectable } from "@angular/core";

import { ApiService } from "./api.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class FormService {

    constructor(private apiService: ApiService){}

    getForm(id: string): Observable<any>{
        return this.apiService.get('/form/' + id);
    }

    postForm(groupId: string, name: string, description: string, level: string, members: Object[], forms: Object[]){
        return this.apiService.put('/group/push/' + groupId, {
            forms: [{
                name: name,
                description: description,
                form: forms
            }]
        }).pipe(map(res => {
            return res.body;
        }))
    }
}