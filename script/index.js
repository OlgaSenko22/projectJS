"use strict";
const userNumber = +prompt('Enter number');
if(isNaN(userNumber)) {
    console.log('NaN');
} else if(userNumber<2) {
    console.log('the number must be greater than or equal to 2');
} else {
    let num = 2
    while(userNumber % num !==0) {
    num++;
}
console.log(num);
}