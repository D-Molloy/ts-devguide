// reference BadSort.js for the original 'bad' implementation
// don't need this import because we setup the interface
// import { NumbersCollection } from './NumbersCollection'

// Interface isn't needed because we using the abstract class and methods
// export interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean
//     swap(leftIndex: number, rightIndex: number): void
// }

// this is a parent class that will give the sort method to all children
export abstract class Sorter {
    // abstract methods will(must) exist in the child when an instance is created
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftIndex: number, rightIndex: number): void;
    abstract length: number;
    // need to tell Sorter what length/compare/swap as they don't exist in the Sorter Class
    sort(): void {
        const { length } = this
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
                }
            }
        }
    }
}