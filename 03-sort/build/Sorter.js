"use strict";
// reference BadSort.js for the original 'bad' implementation
// don't need this import because we setup the interface
// import { NumbersCollection } from './NumbersCollection'
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// Interface isn't needed because we using the abstract class and methods
// export interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean
//     swap(leftIndex: number, rightIndex: number): void
// }
// this is a parent class that will give the sort method to all children
var Sorter = /** @class */ (function () {
    function Sorter() {
    }
    // need to tell Sorter what length/compare/swap as they don't exist in the Sorter Class
    Sorter.prototype.sort = function () {
        var length = this.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
