export class Lineitem {
    public Description: string;
    public IsDeleted: boolean;

    constructor(obj) {
        this.Description = obj.description !== undefined ? obj.description : "";
        this.IsDeleted = obj.isDeleted !== undefined ? obj.isDeleted : false;
    }
}