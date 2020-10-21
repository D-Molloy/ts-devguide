import fs from 'fs';

// by convention, generics <T> are referenced with one letter
export abstract class CsvFileReader<T> {
    data: T[] = [];
    constructor(public filename: string) { }
    // generalizing this class by converting the return into its own method
    abstract mapRow(row: string[]): T


    // convert the string of matches into a 2d array of match info
    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split("\n").map((row: string): string[] => row.split(",")).map(this.mapRow)
    }
}

/**
 * - GENERICS -
 */
// Nothing to do with generics

// horrible
// const addOne = (arg: number): number => arg + 1
// const addTwo = (arg: number): number => arg + 2
// const addThree = (arg: number): number => arg + 3

// // better
// const add = (num1: number, num2: number): number => {
//     return num1 + num2
// }

// add(10, 1)
// add(10, 2)
// add(10, 3)

// BAD
// class HoldNumber {
//     data: number;
// }
// class HoldString {
//     data: string
// }

// const holdNumber = new HoldNumber();
// holdNumber.data = 123
// const holdString = new HoldString();
// holdString.data = "denis"
// TypeOfData is a generic - <generic>

// GOOD
// class HoldAnything<TypeOfData>{
//     data: TypeOfData;
//     constructor(data: TypeOfData) {
//         this.data = data
//     }
//     // can also use throughout code
//     add(a: TypeOfData): TypeOfData {
//         return this.data
//     }
// }

// const holdNumber = new HoldAnything<number>(123);
// holdNumber.add(10)
// const holdString = new HoldAnything<string>("denis");
