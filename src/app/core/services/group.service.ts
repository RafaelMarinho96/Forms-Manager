import { Injectable } from "@angular/core";

import { ApiService } from "./api.service";

@Injectable({
    providedIn: 'root'
})

export class GroupService {

    constructor(private api: ApiService){}

    getForms(){
        
    }
}