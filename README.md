## Notes taken from Typescript: The Complete Developer's Guide (Stephen Grider)

packages - parcel-bundler, faker

TypeScript helps catch errors
-it wants to know all of the functions in your code, what type of arguments they take, what kind of values they return, and the data in your app

## The TS Type System:

- helps us catch errors during development
- Uses 'type annotations' to analyze our code
- Only active during development
- doesn't provide any performance optimization

(Section 1/2 - fetchTodo)

- use 'ts-node' package to compile and run files

## Definitions

- Type: Easy way to refer to the different properties + function that a value has. Every value in TS has a type.

### TS Types

- TS has two kinds of types:
  - Primitive types: number, boolean, void, undefined, string, symbol, null
  - Object types: functions, arrays, classes, objects (any types that we create)
- Object type, trick TS into thinking its the right kind of types

### Why care about types?

- Types are used by the Typescript Compiler to analyze our code for errors
- Types allow other engineers to understand what values are flowing around our codebase

#### Where do we you types? EVERYWHERE

(Section 3)

## Type Annotations & Type Inference

- Type Annotations: Code we add to tell TS what type of value a variable will refer to. We (devs) tell TS the type (Manual)
- Type inference: TS tries to figure out what type of value a variable refers to. TS guesses the type (Automatic)
  These two are kind of at odds with each other

### When to use:

Type Annotation - We tell Typescript the type
Type Inference - Typescript guesses the type

- Type annotations:

  - When we declare a vairable on one line then initialize it later
  - When we want a variable to have a type that can't be inferred
  - When a function returns the 'any' type and we need to clarify the value

- Type inference: ALWAYS!

### The `Any` Type

When TS can't predict the value, it will be 'any' (like with JSON.parse())

- is an actual type
- means TS has no idea what this is - can't check for correct property references
- AVOID VARS WITH `ANY` AT ALL COSTS

### Type Annotations/Inference around functions

- Annotations - Code we add to tell Typescript what type of arguments a function will receive and what type of values it will return
- Typescript tries to figure out what type of value a function will return

### Arrays

- TS arrays generally have a specific type
  Why do we care?
  -TS can do type inference when extracting values from an array
- TS can prevent us from adding incompatible values to the array
- We can get help with map/forEach/reduce functions
- Flexible - arrays can still contain multiple different types

### Tuples

- array-like structure where each element represents some property of a record
- one possible use - CSV files

```javascript
const coke = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

const cokeTuple: [string, boolean, number] = ["brown", true, 40];
```

### Interfaces

- The goal of an interface is to define a new type
- Interfaces + Classes = How we get really strong code reuse in TS
- creates a new type, describing the property names and value types of an object
- allow us as devs to decide where the errors show us (implementing an interface on a class vs. using as a type annotation)
- adding a '?' after property names makes them optional

```javascript
interface UserProps {
  name?: string;
  age?: number;
}
```

### General Strategy for Reusable Code in TS

- Create functions that accept arguments that are typed with interfaces
- Objects/classes can decide to 'implement' a given interface to work with a function

### Classes

- classes in TS use modifiers
  -- modifier can't override parent class modifiers
  -- public (default): this method can be called any where, any time
  -- private: this method can only be called by other methods in this class
  -- protected: This method can be called by other methods in 'this' class, or by other methods in child classes

  -- Sidenote - The static keyword defines a static method or property for a class. Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.

- Interfaces and Classes are the primary tools used inside TS

### Maps Project

- run 'parcel index.html'

- run 'npm i @types/faker' to install the type definition file

- view contents of faker (ctrl + click on faker) in the \*.d.ts <-extension for definition file - treat like documentation

### TS.CONFIG

- run `tsc --init` to create`tsconfig.json` - generated with possible options commented out
- when a ts file is compiled, it checks for the option within tsconfig.json to setup the ts compiler
  - set `rootDir` for where your ts files live, and `outDir` for where the compiled .js files should be placed
- run `tsc -w` to have ts watch for any changes within the `src` folder and recompile when changes detected

### Type Guard (03-sort)

- checking the type of an argument before executing code
- tells TS to allow access to all methods for the 'type' within the type guard
- for primitives (number, string, boolean, symbol), user `typeof`
- every other type of value (array, object), use `instanceof` and Constructor function for that type (instanceof Array)

### Abstract Classes - alternative to Interfaces - relies on inheritance

- can't be used to create an object directly
- Only used as a parent class
- can contain real implementation for some methods
- the implemented methods can refer to other methods that don't actually exist yet (we still have to provide names and types for the unimplemented methods)
- can make child classes promise to implement some other method

### Interfaces vs Abstract Classes

Interfaces

- sets up a contract between to different classes
- use when we have very different objects that we want to work together
- promotes loose coupling

Inheritance/Abstract Classes

- sets up a contract between to different classes
- use when we are trying to build up a definition of an object
- STRONGLY couples classes together (parent depends on child and vice versa)

### Enums (enumeration) (04-csvParser)

- Follow near-identical syntax rules as normal objects
- Creates an object with the same keys and values when converted from TS to JS
- primary goal is to signal to other engineers that these are all closely related values
- Use whenever we have a small fixed set of values that are all closely related and known at compile time

```javascript
enum MatchResult {
    HomeWin = "H",
    AwayWin = "A",
    Draw = "D"
}
```

- also allows for `type assertions` - telling TS that a value will be contained in a specific enum

```javascript
row[5] as MatchResult
```

### Generics

- passing type definitions to a class on the fly

```javascript
class HoldAnything<TypeOfData> {
  data: TypeOfData;
  constructor(data: TypeOfData) {
    this.data = data;
  }
  // can also use throughout code
  add(a: TypeOfData): TypeOfData {
    return this.data;
  }
}

const holdNumber = new HoldAnything() < number > 123;
const holdString = new HoldAnything() < string > "denis";

// or
class HoldNumber extends HoldAnything<number> {
  //...
}
```

- like function arguments, but for types in class/function definitions
- Allows us to define the type of a property/argument/return value at a future point
- used heavily when writing reusable code

### Inheritance vs Composition (04-csvReader - vid 121)

- INHERITANCE
  - characterized by an 'IS A' relationship between two classes
  - e.g. MatchReader 'is a' csvFileReader because MatchReader has all of the properties/methods of csvFileReader
- COMPOSITION (one object has a reference to another object)

  - characterized by a 'HAS A' relationship between two classes
  - favor delegation as a pattern to implement composition
  -
  - e.g. MatchReader 'had a' reference to some outside object (CsvFileReader)

- Composition is used in general (and favored in general) - can be a lot easier to implement DRY code by offloading core functionality

This may be a 'textbook' javascript definition but it's different than the definition of Composition in TS. Below is not a good pattern. For example - methods will be overwritten in the objectAssign. The term for the following snippet would be "Multiple Inheritance"

```javascript
const rectangular = (state) => {
  return {
    area: () => {
      return state.height * state.width;
    },
  };
};

const openable = (state) => {
  return {
    toggleOpen: () => {
      state.open = !state.open;
    },
  };
};

const buildRectangleWindow = (state) => {
  return Object.assign(state, rectangular(state), openable(state));
};

const rectangleWindow = buildRectangleWindow({
  open: false,
  height: 60,
  width: 100,
});

const windowArea = rectangleWindow.area();
console.log(windowArea); //6000
console.log(rectangleWindow.open); //false
rectangleWindow.toggleOpen();
console.log(rectangleWindow.open); //true
```

- true composition has a base class that DELEGATES/offloads heavy lifting to other objects. The results of this heavy lifting could have different results (creating a new file vs console.logging the results)

- 04-csvParser summary - vid 132

### Generic Constraints

```javascript
class Car {
    print() {
        console.log("I am a car")
    }
}

class House {
    print() {
        console.log("I am a house")
    }
}

// need to use the interface to promise TS that whatever is passed in will have a print method
interface Printable {
    print(): void
}
function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print(); //Without 'extends Printable in the generic => Property 'print' does not exist on on type T

    }
}

// the following would lead to an error (bc print doesn't exist)
printHousesOrCars([1, 2, 3, 4]) //Type number is not assignable to type Printable
// Type Inference - not passing the type of argument - be explicit about the type
printHousesOrCars([new Car(), new Car()])
// Type Annotation
printHousesOrCars<House>([new House(), new House()])
```

### 05-web

- start parcel: `parcel index.html`
- run json-server: `json-server -w db.json`

#### Serialize & Deserialize

- serialize - Covert data from an object into some save-able format (json)
- deserialize - Put data on an object using some previously saved data(json)
