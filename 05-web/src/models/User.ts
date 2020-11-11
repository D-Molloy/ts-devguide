
import { Eventing } from './Eventing'


// "?" - optional property - meaning we can pass 0 or more to satisfy the instance
interface UserProps {
    // id - added by json-server
    id?: number;
    name?: string;
    age?: number
}

export class User {
    public events: Eventing = new Eventing()
    constructor(private data: UserProps) { }

    //  (number | string) is a TYPE UNION
    get(propName: string): (number | string) {
        return this.data[propName]
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }
}
