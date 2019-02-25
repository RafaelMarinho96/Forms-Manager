import { Component } from "@angular/core";
import { UserService } from "src/app/core/services/user.service";
import { Observable } from "rxjs";
import { UserModel } from "src/app/core/models/user.model";


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

    user$: Observable<UserModel>;
    user: UserModel;

    constructor(userService: UserService){
        this.user$ = userService.getUser();
        this.user$.subscribe(user => this.user = user);
    }
}