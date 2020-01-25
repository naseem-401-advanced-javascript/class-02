"use strict";

class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return "Moving Forward";
  }

  stop() {
    return "Stopping";
  }
}

class Car extends Vehicle { /// class child extend parent 

  constructor(name, wheels) {
    super(name, 4);// send from child to parent 
  }
//   movment(){
//       super.drive();
//       super.stop();

//   }
 }

class Motorcycle extends Vehicle {
  constructor(name, wheels) {
    super(name, 2);
  }

  wheelie() {
    return "Wheee!";
  }
}

module.exports = { Car, Motorcycle };
// module.exports = { Car};
// module.exports={Motorcycle}; Sned the second one jsut
 