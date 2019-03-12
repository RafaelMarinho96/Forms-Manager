import { UserModel } from "./user.model";
import { FormModel } from "./form.model";

export class GroupModel{
    name: string;
    author: string;
    members: UserModel[];
    description: string;
    urlPath: string;
    created_at: Date;
    forms: FormModel;
}