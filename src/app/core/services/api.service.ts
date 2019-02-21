import { Injectable } from "@angular/core";
import { Api } from "../interfaces/api.interface";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class ApiService implements Api{

    constructor(private http: HttpClient){}

    login(path: string, body: Object): Observable<any> {
        return null;
    }

}