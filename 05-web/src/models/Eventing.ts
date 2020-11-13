// setting up a type ALIAS for a function that returns nothing
type Callback = () => void;

export class Eventing {
    events: { [key: string]: Callback[] } = {}
    // ()=>{} - callback is of type function that receives no arguments and return nothing
    // need these methods to be bound to the current instance of eventing, so use arrow functions
    // ALWAYS USE ARROW FUNCTIONS
    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || []
        handlers.push(callback)
        this.events[eventName] = handlers
    }

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName] || []
        if (!handlers || handlers.length === 0) return
        handlers.forEach(callback => callback())
    }
}