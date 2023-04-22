"use strict";
const weight = 75;
const liter = 48;
const price = 13;
const potatoes = (weight, liter, price) => {
    const num1 = weight * 4;
    const num2 = (num1 * liter)/1000;
    return Math.round(num2 * price);
}
console.log(potatoes(weight, liter, price));