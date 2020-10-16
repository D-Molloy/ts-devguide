import faker from 'faker'

export class User {
    name:string;
    location:{
        lat:number;
        lng:number;
    }

    constructor(){
        this.name = faker.name.firstName()
        // must initialize the whole object first (or else can't set property lat of undefined)
        this.location={
            lat:parseFloat(faker.address.latitude()),
            lng:parseFloat(faker.address.longitude()),

        }
    }
}