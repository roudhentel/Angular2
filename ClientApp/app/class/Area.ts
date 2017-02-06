import { Heading } from "./Heading";

export class Area {
    public Name: string;
    public ListHeading: Array<Heading>;
    public IsDeleted: false;

    constructor(obj) {
        this.Name = obj.name !== undefined ? obj.name : "";
        this.ListHeading = [];
        if (obj.listHeading !== undefined) {
            for (let item of obj.listHeading) {
                this.ListHeading.push(new Heading(item));
            }
        }
        this.IsDeleted = obj.isDeleted !== undefined ? obj.isDeleted : false;        
    }
}