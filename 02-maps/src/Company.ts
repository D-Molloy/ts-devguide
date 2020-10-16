import faker from 'faker'

export class Company {
	companyName: string;
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	}
	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		// must initialize the whole object first (this.location.lat= faker...=== can't set property lat of undefined)
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		}
	}
}