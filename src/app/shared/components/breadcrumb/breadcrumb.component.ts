import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, ActivationEnd } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit{
    
    inscription: Subscription;
    url: string;
    path: string[];

    constructor(
        private router: Router,
        private route: ActivatedRoute){}
    
    ngOnInit(): void {
        console.log(this.router.url)
        console.log()
        this.router.events.subscribe((event) => {
            if(event instanceof NavigationEnd){
                this.url = event.url,
                this.path = this.url.split('/');

                this.path.forEach((value) => {
                    if(value == 'group'){}
                })
            }

            if(event instanceof ActivationEnd){
                if(event.snapshot.params.urlPath){
                    console.log('habilita form')
                }
            }
        });
    }
}