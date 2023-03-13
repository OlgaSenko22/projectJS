"use strict";

const num1 = +prompt('Enter first number?');
const num2 = +prompt('Enter second number?');
function number1(num1, num2) {
    return num1===num2;
}
console.log(number1(num1, num2));
function number2(num1, num2) {
    return (num1+num2)>10;
}
console.log(number2(num1, num2));
const num3 = +prompt('Enter number?');
function number3(num3) {
    return num3<0;
}
console.log(number3(num3));
