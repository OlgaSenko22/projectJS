"use strict";
//Task1
const factorial = (n) => {
    if(n === 1 || n === 0) {
        return 1;
    }
    return n * factorial ( n - 1);
}
console.log(factorial(3));

//Task2
const pow = (num, degree) => {
    if (degree === 1) {
        return num;
    }
    return num * pow(num, degree - 1);

}
console.log(pow(5,3));

//Task3
const sumTo = (a, b) => {
    if(b === 0) {
        return a;
    }
    return sumTo( a + 1, b - 1);
}
console.log(sumTo(2, 6));