// class ArrayOfNumbers {
//     constructor(public collection: number[]) { }

//     get(index: number): number {
//         return this.collection[index]
//     }
// }

// class ArrayOfStrings {
//     constructor(public collection: string[]) { }

//     get(index: number): string {
//         return this.collection[index]
//     }

// }

// Generic - replaces the need for the separate classes above
class ArrayOfAnything<T>{
    constructor(public collection: T[]) { }

    get(index: number): T {
        return this.collection[index]
    }
}

new ArrayOfAnything<string>(["a", "b"])


/**
 * EXAMPLE OF GENERICS WITH FUNCTIONS
 */

function printStrings(arr: string[]): void {
    arr.forEach(item => console.log(item))
}
function printNumbers(arr: number[]) {
    arr.forEach(item => console.log(item))
}

// Generic
function printAnything<T>(arr: T[]) {
    arr.forEach(item => console.log(item))
}

printAnything<number>([1, 2, 3])
printAnything<string>(["a", "b"])
// the following would be read as a two dimensional array of strings
// printAnything<string[]>([["a"], ["b"]])

// Generic Constraints
class Car {
    print() {
        console.log("I am a car")
    }
}

class House {
    print() {
        console.log("I am a house")
    }
}

// need to use the interface to promise TS that whatever is passed in will have a print method
interface Printable {
    print(): void
}
function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print(); //Property 'print' does not exist on on type T

    }
}

// the following would lead to an error (bc print doesn't exist)
printHousesOrCars([1, 2, 3, 4]) //Type number is not assignable to type Printable
// Type Inference - not passing the type of argument - be explicit about the type
printHousesOrCars([new Car(), new Car()])
// Type Annotation
printHousesOrCars<House>([new House(), new House()])