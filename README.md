## Notes taken from Typescript: The Complete Developer's Guide (Stephen Grider)

TypeScript helps catch errors

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
