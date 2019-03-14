import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class RouterService {

    constructor(
        private router: Router){}

    routerEvents(){
        return this.router.events;
    }


}