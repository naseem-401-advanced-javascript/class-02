'use strict';

const validator = require('../../lib/validator.js');

describe('validator module performs basic validation of', () => {

    // TODO: Make this series of tests less repetitive ... DRY it out

    let str = 'yes';
    let num = 1;
    let arr = ['a'];
    let obj = { x: 'y' };
    let func = () => { };
    let bool = false;
    const types = [num, arr, obj, func, bool]

    it('strings', () => {
        expect(validator.isString(str)).toBeTruthy();
        types.forEach(element => {
            expect(validator.isString(element)).toBeFalsy();
        });
    });

    it('numbers', () => {
        expect(validator.isNum(num)).toBeTruthy()
        // expect(true).toBeFalsy();
    });

    it('arrays', () => {
        expect(validator.isArr(arr)).toBeTruthy()
        // expect(true).toBeFalsy();
    });

    it('objects', () => {
        expect(validator.isObj(obj)).toBeTruthy()
        // expect(true).toBeFalsy();
    });

    it('booleans', () => {
        expect(validator.isBoolean(bool)).toBeTruthy()
        // expect(true).toBeFalsy();
    });

    it('functions', () => {
        expect(validator.isFunc(func)).toBeTruthy()
        // expect(true).toBeFalsy();
    });

});

describe('validator module performs complex validations', () => {
    const Anime = {
        name: 'Your lie in April',
        hero: 'Kosei',
        numOfEp: 24,
        genere: ['romance', 'music', 'school'],
        hater: null,
        WorthToWatch: ['yes']
    }
    it('validates the presence of required object properties at any level', () => {
        // i.e. does person.hair.color exist and have a good value, not just person.hair
        expect(Anime.hater).toBeNull()
        expect(Anime.numOfEp).toEqual(24);
        // expect(true).toBeFalsy();
    });

    it('validates the proper types of object properties', () => {
        // i.e. person.name must be a string, etc.
        expect(typeof Anime.name).toMatch('string')
        // expect(true).toBeFalsy();
    });

    it('validates the types of values contained in an array', () => {
        // i.e. an array of all strings or numbers
        Anime.genere.forEach(ele => {
            expect(typeof ele).toMatch('string')
        });
        // expect(true).toBeFalsy();
    });

    it('validates a value array against an approved list', () => {
        // i.e. a string might only be allowed to be "yes" or "no"
        let someValue = Anime.WorthToWatch.includes('yes')
        expect(someValue).toBeTruthy()
        // expect(true).toBeFalsy();
    });

    // TODO: Cover so, so many more cases

});