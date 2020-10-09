/**
 * ANNOTATIONS WITH FUNCTION  AND OBJECTS
 */

// No type inference on arguments!  Must annotate
// TS will check for return value and type...don't need to annotate return value
// const add = (a: number, b: number): number => {
const add = (a: number, b: number) => {
  // return a-b //won't check to make sure you're actually adding
  return a + b;
};

// ts shows return value of 'void'-  REASON YOU SHOULD ANNOTATE RETURN VALUE
const subtract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a - b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// No return value
const logger = (message: string): void => {
  console.log(message);
};

//RARE:  Use never when you know you'll never reach the end of the function
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring with Annotations
const forecast = {
  date: new Date(),
  weather: "sunny",
};

// const logWeather = (forecast: { date: Date; weather: string }): void => {
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(forecast);
