class Vehicle{
    // option 1
    // color: string; 
    // constructor(color:string){
    //     this.color = color
    // }

    // option 2
    // need to include curlies
    constructor(public color:string){}
    // This method can be called by other methods in 'this' class, or by other methods in child classes
    protected honk():void{
        console.log("beep")
    }
}

// const vehicle = new Vehicle('orange');
// vehicle.honk() //cant use because its protected
// console.log('vehicle', vehicle)

class Car extends Vehicle{
    // overriding methods
    // private - this method can only be called inside the class ie. creating an instance and calling drive results in an error
    constructor(public wheels: number, color: string){
        super(color)
    }
    private drive():void{
        console.log("rrreeeeerrrrrrr")
    }

    startDriving():void{
        this.drive()
        this.honk()
    }
}



const car = new Car(4,"orange")

car.startDriving()
console.log('car', car)
// car.honk() //cant use because its protected