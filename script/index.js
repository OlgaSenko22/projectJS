"use strict";
const userNumber = +prompt('Enter number', '1');
const userNumberPower = +prompt('Enter number power', '2');
function foo (userNumber, userNumberPower) {
    if(isNaN(userNumber) || isNaN(userNumberPower)) {
        return 'some error';
    } else {
        return Math.pow(userNumber, userNumberPower);
    }
}
alert(foo(userNumber, userNumberPower));