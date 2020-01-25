'use strict';

const personValidator = require('../lib/validator.js');

const data = require('../data/data.json');

let person = new personValidator.Person(data);

console.log(person);

describe('validator module performs complex validations', () => {

    it('validates is the entity itself the right type (array, object, function etc)', () => {
        // i.e. does person.hair.color exist and have a good value, not just person.hair
        for (const key in person) {
            expect(person.isCorrectType(key)).toBeTruthy()
        }
        // expect(true).toBeFalsy();
    });

    it('validates all “required” properties present and do they have values?', () => {
        // i.e. person.name must be a string, etc.
        expect(typeof person.firstName).toEqual('string')
        expect(typeof person.lastName).toEqual('string')
        expect(typeof person.hair).toEqual('object')
        expect(typeof person.married).toEqual('boolean')
        expect(typeof person.kids).toEqual('number')
        expect(Array.isArray(person.favoriteFoods)).toBeTruthy();
        // expect(true).toBeFalsy();
    });

    it('validates or any property that specifies a type, does the value match that type', () => {
        // i.e. an array of all strings or numbers
        person.favoriteFoods.forEach(food => {
            expect(typeof food).toEqual('string')
        });

        for (const key in person.hair) {
            if (person.hair.hasOwnProperty(key)) {
                expect(typeof key).toEqual('string')
            }
        }
        // expect(true).toBeFalsy();
    });

    // TODO: Cover so, so many more cases

});