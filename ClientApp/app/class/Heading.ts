import { Lineitem } from "./Lineitem";

export class Heading {
    public Description: string;
    public ListHeading: Array<Heading>;
    public ListLineitem: Array<Lineitem>;
    public Level: number;
    public IsDeleted: boolean;

    constructor(obj: any) {
        this.Description = obj.description !== undefined ? obj.description : "";
        this.Level = obj.level !== undefined ? obj.level : 0;
        this.ListHeading = [];
        if (obj.listHeading !== undefined) {
            for (let item of obj.listHeading) {
                this.ListHeading.push(new Heading(item));
            }
        }
        this.ListLineitem = [];
        if (obj.listLineitem !== undefined) {
            for (let item of obj.listLineitem) {
                this.ListLineitem.push(new Lineitem(item));
            }
        }
        this.IsDeleted = obj.isDeleted !== undefined ? obj.isDeleted : false;
    }
}