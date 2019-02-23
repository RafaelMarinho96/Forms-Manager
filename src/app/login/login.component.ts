import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit{
    
    login: FormGroup;
    
    constructor(private formBuilder: FormBuilder){}
    
    ngOnInit(): void {
        this.login = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }
}