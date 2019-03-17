import { Injectable } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class RouterService {

    constructor(
        private router: Router,
        private route: ActivatedRoute){}

    routerEvents(){
        return this.router.events;
    }

    routeGetParam(param: string){
        return this.route.snapshot.params[param];
    }
}