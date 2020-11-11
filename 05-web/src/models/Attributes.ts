export class Attribute {
    constructor(private data: UserProps) { }

    //  (number | string) is a TYPE UNION
    get(propName: string): (number | string) {
        return this.data[propName]
    }

    set(update: UserProps): void {
        Object.assign(this.data, update)
    }
}