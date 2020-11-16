import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
    set(value: T): void;
    get<K extends keyof T>(key: K): T[K];
    getAll(): T
}

interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise
}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}1

interface HasId {
    id?: number
}

export class Model<T extends HasId> {
    constructor(
        private attributes: ModelAttributes<T>,
        private events: Events,
        private sync: Sync<T>
    ) { }


    // on without getter (would also have to type the return)
    // on(eventName:string, callback:Callback): void{
    //     this.events.on(eventName, callback)
    // }
    // using getter - return a REFERENCE to the function you want to run
    // get on() {
    //     return this.events.on
    // }
    // get trigger() {
    //     return this.events.trigger;
    // }

    // get get() {
    //     return this.attributes.get;
    // }

    /** Shorten even further: (can only refactor to this because events and attributes or initialized in a constructor instead of inline) */
    on = this.events.on
    trigger = this.events.trigger
    get = this.attributes.get


    set(update: T): void {
        this.attributes.set(update)
        this.events.trigger('change')
    }

    fetch(): void {
        // if id is truthy then user exists
        const id = this.get('id')
        if (typeof id !== 'number') {
            throw new Error("Can't fetch without an id")
        }
        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data)
        })
    }

    save(): void {
        this.sync.save(this.attributes.getAll()).then((response: AxiosResponse): void => {
            this.trigger("save")
        }).catch(() => {
            this.trigger('error')
        })
    }
}