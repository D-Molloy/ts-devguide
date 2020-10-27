const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// hover over pepsi = const pepsi: (string | number | boolean)[]
const pepsi = ["brown", true, 40];
// doesn't work with tuples where order matters

// annotating array
const importantDatez: (Date | string)[] = [];
// annotating tuple
const coke: [string, boolean, number] = ["brown", true, 40];
coke[0] = 40;

// TYPE ALIAS
type Drink = [string, boolean, number];

const sprite: Drink = ["clear", true, 60];
const tea: Drink = ["brown", false, 10];

/**
 * Why tuples aren't that
 */

const carSpecs: [number, number] = [400, 3354];

const carStats: { horsePower: number; weight: number } = {
  horsePower: 400,
  weight: 3354,
};
