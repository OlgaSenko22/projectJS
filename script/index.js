"use strict";
const obj = {
    num: 5
}
function sumTo(a, b) {
    return this.num + a + b;
}
const foo = sumTo.bind(obj, 5, 5);
console.log(foo());