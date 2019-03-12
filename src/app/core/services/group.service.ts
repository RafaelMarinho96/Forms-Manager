import { Injectable } from "@angular/core";

import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})

export class GroupService {

    constructor(private apiService: ApiService){}

    getGroups(){
        return this.apiService.get('/group');
    }

    getGroupFormByUrlPath(urlPath: string){
        return this.apiService.get('/group/' + urlPath + '/urlpath');
    }
}