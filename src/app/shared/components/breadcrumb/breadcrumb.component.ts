import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd, NavigationStart, ActivatedRoute, ActivationEnd } from "@angular/router";
import { Subscription } from "rxjs";
import { RouterService } from "src/app/core/services/router.service";
import { FormService } from "src/app/core/services/form.service";

@Component({
    selector: 'app-breadcrumb',
    templateUrl: './breadcrumb.component.html',
    styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnInit{
    
    url: string;
    path: string[];
    type: string;
    formId: string;

    constructor(
        private routerService: RouterService,
        private formService: FormService){
        this.routerService.routerEvents().subscribe(
            (event) => {
                if(event instanceof NavigationEnd){
                    this.url = event.url,
                    this.path = this.url.split('/');

                    this.path.forEach((value) => {
                        switch (value) {
                            case 'group':
                                this.type = 'group'                                
                                break;
                            
                            case 'form':
                                this.type = 'form',
                                this.formId = this.formService.getFormId();
                                break;

                            default:
                                break;
                        }
                    })
                }
            }
        )
    }

    ngOnInit(): void {
        
    }
}