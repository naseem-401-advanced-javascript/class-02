'use strict';


class Validate {
    constructor(input, rules) {
        this.input
        this.rules
    };

    isValid(input, rules) {
        return rules(input)
    }

    isTruthy(input) {
        if (input) {
            return true
        }
    };

    isCorrectType(input) {
        let type = ['string', 'number', 'object', 'boolean', 'function'];
        for (let i = 0; i < type.length; i++) {
            if (typeof input == type[i]) {
                return true
            }
        }

    }
}

class Person extends Validate {
    constructor(input) {
        super(input)
        this.firstName = input.firstName;
        this.lastName = input.lastName;
        this.hair = input.hair;
        this.favoriteFoods = input.favoriteFoods
        this.married = input.married;
        this.kids = input.kids;
    }
}

module.exports = { Validate, Person };