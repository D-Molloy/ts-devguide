import { Sorter } from './Sorter'
export class NumbersCollection extends Sorter {
    // data: number[];
    // constructor(data: number[]){
    //     this.data=data
    // }
    // or :
    constructor(public data: number[]) {
        super()
    }

    // const collection = new NumberCollection([1,2,3])
    // collection.length;  //refers to the length method
    get length(): number {
        return this.data.length
    }

    /**
     * return a boolean as to whether indexes should be swapped 
     * replaces the line : if(this.collection[j] > this.collection[j + 1]) from badSort
     */
    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }
    /**
     * The logic for swapping array indices
     * @param leftIndex 
     * @param rightIndex 
     */
    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand
    }
}