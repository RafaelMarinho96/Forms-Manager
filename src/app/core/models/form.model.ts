import { GroupModel } from "./group.model";

export class FormModel{
    _id: string;
    name: string;
    description: string;
    urlPath: string;
    author: string;
    group: GroupModel = new GroupModel();
    form: Object[] = new Array<Object>();
}