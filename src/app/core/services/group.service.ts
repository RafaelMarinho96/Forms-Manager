import { Injectable } from "@angular/core";

import { ApiService } from "./api.service";
import { Key } from "protractor";

const KEY_ID: string = 'groupId';
const KEY_URLPATH: string = 'groupUrlPath';

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

    hasGroup() {
        return !!this.getGroupId() && !!this.getGroupUrlPath();
    }

    setGroupId(groupId: string) {
        window.localStorage.setItem(KEY_ID, groupId);
    }

    getGroupId() {
        return window.localStorage.getItem(KEY_ID);
    }

    setGroupUrlPath(groupUrlPath: string) {
        window.localStorage.setItem(KEY_URLPATH, groupUrlPath);
    }

    getGroupUrlPath() {
        return window.localStorage.getItem(KEY_URLPATH);
    }

    removeGroup() {
        window.localStorage.removeItem(KEY_ID);
        window.localStorage.removeItem(KEY_URLPATH);
    }
    
}