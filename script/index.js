"use strict";
const userNumber = +prompt('Enter number');
const foo = (userNumber) => {
    for(let i = 2; i<userNumber; i++) {
        if(userNumber % i === 0) return false;
    }
    return userNumber > 1;
}
console.log(foo(userNumber));
