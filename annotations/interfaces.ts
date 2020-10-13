// when the interface is used in printVehicle below, TS checks to make sure the oldCivic and Beverage successfully implement the Reportable interface
interface Reportable {
  //   name: string;
  //   year: Date;
  //   broken: boolean;
  // the return value is annotated
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name} | year: ${this.year} | broken: ${this.broken}`;
  },
};

const beverage = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar.`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// because both args have a summary method, they are of type/interface Reportable
printSummary(oldCivic);
printSummary(beverage);
