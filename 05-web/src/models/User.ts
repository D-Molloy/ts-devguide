// "?" - optional property - meaning we can pass 0 or more to satisfy the instance
interface UserProps {
    name?: string;
    age?: number
}
// setting up a type ALIAS for a function that returns nothing
type Callback = () => void;


export class User {
    events: { [key: string]: Callback[] } = {}

    constructor(private data: UserProps) { }

    //  (number | string) is a TYPE UNION
    get(propName: string): (number | string) {
        return this.data[propName]
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }

    // ()=>{} - callback is of type function that receives no arguments and return nothing
    on(eventName: string, callback: Callback): void {
        const handlers = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers
    }

    trigger(eventName: string): void {
        const handlers = this.events[eventName] || []
        if (!handlers || handlers.length === 0) return
        handlers.forEach(callback => callback())
    }
}
