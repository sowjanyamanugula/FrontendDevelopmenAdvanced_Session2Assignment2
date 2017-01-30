class Vehicle {
 
  constructor (name, type) {
    this.name = name;
    this.type = type;
  }
 
  getName () {
    return this.name;
  }
 
  getType () {
    return this.type;
  }
 
}

class Car extends Vehicle {
 
  constructor (name) {
    super(name, 'car');
  }
 
  getName () {
    return 'It is a car: ' + super.getName();
  }
 
}

class Bike extends Vehicle{
    constructor (name) {
    super(name, 'bike');
  }
 
  getName () {
    return 'It is a bike: ' + super.getName();
  }
}
class Bus extends Vehicle{
    constructor (name) {
    super(name, 'bus');
  }
 
  getName () {
    return 'It is a bus: ' + super.getName();
  }
}
let car = new Car('swift D');
let bike=new Bike('Hardley Davidson');
let bus=new Bus('Orange Tours and Travels');
console.log(car.getName()); // It is a car: swift D
console.log(car.getType()); // car
console.log(bike.getName()); // It is a bike: Hardley Davidson
console.log(bike.getType()); // bike
console.log(bus.getName()); // It is a bus: Orange Tours and Travels
console.log(bus.getType()); // bus