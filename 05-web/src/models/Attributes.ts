// import { UserProps } from './User'

export class Attributes<T> {
    constructor(private data: T) { }

    //  (number | string) is a TYPE UNION
    // K isn't a keyword, its by convention
    // <K extends keyof T> - creates a Generic Constraint - type of K can only ever be a key of T 
    // a constraint limits the types which K can be (another example in Sync.ts)
    // if T is UserProps, then K can only be "id", "name", "age"
    // T[K] - a normal object lookup - look at the interface of T and return the corresponding type
    //  use BOUND/arrow function to get around 'this' issues
    // need to make sure that 'this' in get correctly bound to the instance of attributes
    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key]
    }

    set(update: T): void {
        Object.assign(this.data, update)
    }
}

// const attrs = new Attributes<UserProps>({
//     id: 5,
//     age: 20,
//     name: "denis"
// })
// const name = attrs.get('name')  //name:string
// const age = attrs.get('age') //age:number


// type BestName = 'Denis'
// const printName = (name: BestName): void => {

// }
// printName("Denis")
// printName("denis") //Error