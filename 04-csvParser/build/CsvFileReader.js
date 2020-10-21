"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
// by convention, generics <T> are referenced with one letter
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    // convert the string of matches into a 2d array of match info
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split("\n").map(function (row) { return row.split(","); }).map(this.mapRow);
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
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
