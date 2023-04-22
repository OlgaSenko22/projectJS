"use strict";
const userNumber = prompt('Enter number');
const userNumberPower = prompt('Enter number power');

const foo = (userNumber, userNumberPower = 1) => {
    if(userNumber === null || isNaN(userNumber) || userNumber.trim() === "" || userNumberPower === null || isNaN(userNumberPower) || userNumberPower.trim() === "") {
        return 'some error';
    }
        return Math.pow(userNumber, userNumberPower);
}
const result= foo(userNumber, userNumberPower);
alert(result);

