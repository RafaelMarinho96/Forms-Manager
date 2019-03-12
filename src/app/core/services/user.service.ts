import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { BehaviorSubject } from "rxjs";
import * as jtw_decode from "jwt-decode";
import { UserModel } from "../models/user.model";
import { ApiService } from "./api.service";
import { utf8Encode } from "@angular/compiler/src/util";

@Injectable({
    providedIn: 'root'
})

export class UserService{

    private userSubject = new BehaviorSubject<UserModel>(null);

    
    constructor(
        private tokenService: TokenService,
        private apiService: ApiService){
            this.tokenService.hasToken() &&
            this.decodeAndNotify();
        }

    checkEmailTaken(email: string){
        return this.apiService.get('/user/' + email + '/exists');
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }
    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as UserModel;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hasToken();
    }
}