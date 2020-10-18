import faker from 'faker'
// implementing Mappable will help catch error while working on the class instead of after creating instances
import { Mappable } from './CustomMap'

export class Company implements Mappable {
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	}
	color: string = "blue";

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		// must initialize the whole object first (this.location.lat= faker...=== can't set property lat of undefined)
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}
	markerContent(): string {
		return `
		<div>
		<h1>Company name: ${this.companyName} </h1>
		<h3>Slogan: ${this.catchPhrase}</h3>
		</div>
		`
	}
}