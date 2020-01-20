'use strict';

let validator = module.exports = {};

/**
 * Based on a set of rules, is the input valid?
 * TODO: Define the rules ... how do we send them in? How do we identify?
 * @param input
 * @param rules
 * @returns {boolean}
 */
validator.isValid = (input, rules) => {
    // return rules(input);
};

/**
 * Is this a string?
 * @param input
 * @returns {boolean}
 */
validator.isString = (input) => {
    return typeof input === 'string';
};

/***
 * Is this a num?
 * @param input
 * @returns {boolean}
 */
validator.isNum = (input) => {
    return typeof input === "number"
}

/**
 * Is this an arr?
 * @param input
 * @returns {boolean}
 */
validator.isArr = (input) => {
    return Array.isArray(input)
}

/**
 * Is this a obj?
 * @param input
 * @returns {boolean}
 */
validator.isObj = (input) => {
    return typeof input === "object"
}

/**
 * Is this a boolean?
 * @param input
 * @returns {boolean}
 */
validator.isBoolean = (input) => {
    return typeof input === "boolean"
}

/**
 * Is this a func?
 * @param input
 * @returns {boolean}
 */
validator.isFunc = (input) => {
    return typeof input === "function"
}