export class FormModel{
    _id: string;
    name: string;
    description: string;
    author: string;
    group: string;
    form: Object[] = new Array<Object>();
}