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

/**
 * can prevent us from adding incompatible values to the array
 */
carMakers.push(100);

/**
 * We can get help with map/forEach/reduce functions
 */
// ensures a string is passed and helps with .method autocomplete
carMakers.map((car: string): string => {
  return car;
});

/**
 * Flexible - arrays can still contain multiple different types
 */
// annotate when initalizing an empty array
// use inference when initializing with literals
const importantDates: (Date | string)[] = [];
importantDates.push(new Date());
importantDates.push("2030-10-10");
importantDates.push(100);

// When to use typed arrays - any time we need to represent a collection of record with some arbitrary order
