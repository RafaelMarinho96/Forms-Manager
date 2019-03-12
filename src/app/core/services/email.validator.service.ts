import { Injectable } from "@angular/core";
import { AbstractControl } from "@angular/forms";
import { debounceTime, switchMap, map, first } from "rxjs/operators";

import { RegisterService } from "./register.service";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})

export class EmailValidatorService {
    
    constructor(
        private registerService: RegisterService,
        private userService: UserService){}

    emailIsAvailable() {
         return (control: AbstractControl) => {
             return control
                    .valueChanges
                    .pipe(debounceTime(300))
                    .pipe(switchMap(email => this.registerService.checkEmailTaken(email)
            ))
            .pipe(map(isTaken => isTaken ? {emailTaken: true} : null))
            .pipe(first());
         }
    }

    emailExists(){
        return (control: AbstractControl) => {
            return control
                    .valueChanges
                    .pipe(debounceTime(300))
                    .pipe(switchMap(email => this.userService.checkEmailTaken(email)
            ))
            .pipe(map(isTaken => isTaken ? {emailExists: true} : null))
            .pipe(first());
        }
    }
}