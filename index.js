'use strict';

const validator = require('./lib/validator.js');

const VehicleConstructor = require('./lib/vehicle-constructor.js');
const VehicleClass = require('./lib/vehicle-class.js');

// Implement a car and motorcycle using a Constructor
const mazdaConstructor = new VehicleConstructor.Car('Mazda 3');
console.log('mazdaConstructor', mazdaConstructor.name, mazdaConstructor.drive(), mazdaConstructor.stop());


const harleyConstructor = new VehicleConstructor.Motorcycle('Harley');
console.log('harleyConstructor', harleyConstructor.name, harleyConstructor.wheelie(), harleyConstructor.stop());


// Implement a car and motorcycle using a Class
const mazdaClass = new VehicleConstructor.Car('Mazda 3');
console.log('mazdaClass', mazdaClass.name, mazdaClass.drive(), mazdaClass.stop(),'\n');

const harleyClass = new VehicleClass.Motorcycle('Harley')
;
console.log('harleyClass', harleyClass.name, harleyClass.wheelie(), harleyClass.stop(),'\n');


