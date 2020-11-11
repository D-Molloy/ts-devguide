import axios, { AxiosResponse } from 'axios'
const BACKEND = `http://localhost:4000`

export class Sync {
    fetch(): void {
        axios.get(`${BACKEND}/users/${this.get("id")}`)
            .then((response: AxiosResponse): void => {
                this.set(response.data)
            })
    }

    save(): void {
        const id = this.get("id")
        if (id) {
            // user exists -> update
            axios.put(`${BACKEND}/users/${id}`, this.data);
        } else {
            // create a new user
            axios.post(`${BACKEND}/users`, this.data);
        }
    }
}