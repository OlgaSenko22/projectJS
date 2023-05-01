"use strict";
function foo () {
    let num = 0;
    return function (y) {
    num += y;
    return num;
    }
}
let myFunc = foo();
console.log(myFunc(3));
console.log(myFunc(5));
console.log(myFunc(20));
