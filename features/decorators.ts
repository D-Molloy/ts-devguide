@classDecorator
class Boat {

  // @testDecorator
  color: string = 'red';

  // @logError(`This vessel has no color?!`)
  get formattedColor(): string {
    // throw new Error()
    return `This vessel be ${this.color}`
  }


  @logError("Beep boop error")
  pilot(@parameterDecorator speed: string, @parameterDecorator isPontoon: boolean): void {
    // throw new Error() - logError logs custom method
    if (speed === "fast") {
      console.log("zoom")
    } else {
      console.log("waa waa")
    }
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor) //[Function: Boat]
}


// super advanced
// index of the parameter
function parameterDecorator(target: Boat | any, key: string, index: number): void {
  console.log('target', target) //{ pilot: [Function (anonymous)] }
  console.log('key', key) //key pilot
  console.log('index', index) //index 0
}


function testDecorator(target: any, key: string) {
  console.log('{target', target) //{target, key} { target: { pilot: [Function (anonymous)] }, key: 'color' }
  console.log(target.color) //undefined - target points to the prototype, not the instance
  /** CAN NEVER access instance properties because the instance hasn't been initialized */
}

// Decorator factory - used when you want to customize/configure a decorator

/**
 * logError - catch any errors and log a custom method
 * @param target - the prototype of the object
 * @param key - the key of the property/method/accessor on the obj
 * @param desc - an object that has some config options around a property defined on an object.
 */
function logError(errorMessage: string) {

  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value //the pilot method

    desc.value = function () {
      try {
        method()
      } catch (e) {
        console.log(errorMessage)
      }
    }
    // console.log({ target, key, desc }) //{ target: { pilot: [Function (anonymous)] }, key: 'pilot' }
  }
}



const boat = new Boat()
boat.pilot("fast", true) //Oops the boat sunk
