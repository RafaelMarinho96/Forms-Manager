import { UserModel } from "./user.model";
import { GroupModel } from "./group.model";
import { FormModel } from "./form.model";

export class AnswerModel {
    name: string;
    answer: Object[];
    author: UserModel = new UserModel();
    group: GroupModel = new GroupModel();
    form: FormModel = new FormModel();
}