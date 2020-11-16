import { AxiosPromise } from "axios";

interface ModelAttributes<T> {
    set(value: T): void;
    get<K extends keyof T>(key: K): T[K];
    getAll(): T
}

interface Sync<T> {
    fetch(): AxiosPromise;
    save(data: T): AxiosPromise
}

interface Events {
    on(eventName: string, callback: () => void): void;
    trigger(eventName: string): void;
}

export class Model {

}