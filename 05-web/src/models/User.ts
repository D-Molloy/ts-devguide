
import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'
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
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

    // if properties have to be initialized via the constructor (attributes in this case), then you have to initialize like so:
    public attributes: Attributes<UserProps>;
    constructor(attrs: UserProps) {
        this.attributes = new Attributes<UserProps>(attrs)
    }

    // on without getter (would also have to type the return)
    // on(eventName:string, callback:Callback): void{
    //     this.events.on(eventName, callback)
    // }
    // using getter - return a REFERENCE to the function you want to run
    get on() {
        return this.events.on
    }

    get trigger() {
        return this.events.trigger;
    }

    get get() {
        return this.attributes.get;
    }


}
