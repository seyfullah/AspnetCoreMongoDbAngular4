export class Note
{
    constructor(jsonStr: string) {
        let jsonObj: any = JSON.parse(jsonStr);
        for (let prop in jsonObj) {
            this[prop] = jsonObj[prop];
        }
    }
    Id: string;
    Body: string;
    UpdatedOn: Date;
    CreatedOn: Date;
    UserId: number;
    //Id: Object;
    //Body: Object;
    //UpdatedOn: Object;
    //CreatedOn: Object;
    //UserId: Object;
}
