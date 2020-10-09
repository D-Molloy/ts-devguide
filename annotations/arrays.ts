// TYPE INFERENCE
const carMakers = ["ford", "toyota", "chevy"];
// TYPE ANNOTATION - use if you initialize an empty array
// const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

// const carsByMake: string[][]
// const myArr:string[][] = []
const carsByMake = [["f150"], ["corolla"], ["comaro"]];
/**
 * Help with INFERENCE when extracting values
 */
// const car: string
const car = carMakers[0];
// const myCar: string
const myCar = carMakers.pop();
