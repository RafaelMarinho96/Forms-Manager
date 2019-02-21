import { Observable } from "rxjs";
import { User } from "./user.interface";

export interface Api{
    login(path: string, body: Object): Observable<any>;
}