
import { Eventing } from './Eventing'
import { Sync } from './Sync'

// "?" - optional property - meaning we can pass 0 or more to satisfy the instance
export interface UserProps {
    // id - added by json-server
    id?: number;
    name?: string;
    age?: number
}

const rootUrl = "http://localhost:4000/users"

export class User {
    // Eventing - not the best approach bc we're hard-wiring Eventing into this component, but its a safe risk
    public events: Eventing = new Eventing()
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl)

}
