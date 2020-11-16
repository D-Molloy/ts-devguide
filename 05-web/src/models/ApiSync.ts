import axios, { AxiosPromise } from 'axios'

interface HasId {
	id?: number
}

// Extends HasId is a constraint
export class ApiSync<T extends HasId> {
	constructor(public rootUrl: string) { }

	fetch(id: number): AxiosPromise {
		return axios.get(`${this.rootUrl}/${id}`)
	}

	save(data: T): AxiosPromise {
		// added 'extends HasId' constrain on generic (T) to inform TS that type T will have an ID property
		const { id } = data
		if (id) {
			// user exists -> update
			return axios.put(`${this.rootUrl}/${id}`, data);
		} else {
			// create a new user
			return axios.post(this.rootUrl, data);
		}
	}
}