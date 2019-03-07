import { Injectable } from "@angular/core";

import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class FormService {

    constructor(private apiService: ApiService){}

    getForm(id: string): Observable<any>{
        return this.apiService.get('/form/' + id);
    }
}