import faker from 'faker'
// implementing Mappable will help catch error while working on the class instead of after creating instances
import { Mappable } from './CustomMap'


export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    }
    color: string = "red"

    constructor() {
        this.name = faker.name.firstName()
        // must initialize the whole object first (or else can't set property lat of undefined)
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),

        }
    }

    markerContent(): string {
        return `
        <div>
		<h1>Name: ${this.name} </h1>
		</div>`
    }
}