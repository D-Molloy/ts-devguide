/**
 * NONE OF THESE TYPE ANNOTATIONS ARE REQUIRED.  TS will infer the type
 */

// type annotation
let apples: number = 5;
// type inference
let applez = 5;

// apples = 'lllllser'; -> Type '"lllllser"' is not assignable to type 'number'

let speed: string = "fast";

let hasName: boolean = true;

let nothing: null = null;

let huh: undefined = undefined;

// built-in objects
let now: Date = new Date();

// Array
// must specify type of array:
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];

// Classes

class Car {}

let car: Car = new Car();

// Object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
// need to annotate args and return value
// `(i: number) => void` ===annotation
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
// const logNumber2= (i: number) => {
//   console.log(i);
// };

// Type Annotation - We tell Typescript the type
// Type Inference -Typescript guesses the type

// Left of equals ->Variable declaration
// Right of equals -> Variable initialization
/**
 * FIXME: if declaration and initialization are on the same line, TS will figure out the type for us
 */
const color = "red";

/**
 *  When to use annotations
 */
// 1 - a function that returns the 'any' type
const json = `{"x":10, "y":20}`;
// const coords = JSON.parse(json); //Type: any

// coords.adfsafasfjklae; - no error displayed

const coords: { x: number; y: number } = JSON.parse(json); //Type: any
// coords.adfsafasfjklae; -> TS error!

// 2 - when we declare a variable on one line and initialize it later
let words = ["red", "green", "blue"];
// let foundWord; // type: any
let foundWord: boolean = false; // type: boolean

words.forEach((word) => (word === "green" ? (foundWord = true) : null));

// 3 - when we have a variable whose type CANT be inferred
let numbers = [-10, -1, 12];
// find a num > 0 and assign it to positiveNumber, otherwise assign false

// let positiveNumber =false;
// numbers.forEach(num=> num>0? positiveNumber=num :null ) // type inference error: Type 'number' is not assignable to type 'boolean'

let positiveNumber: boolean | number = false;
numbers.forEach((num) => (num > 0 ? (positiveNumber = num) : null));
