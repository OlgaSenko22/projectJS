"use strict";

let a = +prompt('Enter first number');
let b = +prompt('Enter second number');
let result;
const test = 25;
const ex1 = a === 0 ? 'true' : 'false';
const ex2 = a > 0 ? 'true' : 'false';
const ex3 = a < 0 ? 'true' : 'false';
const ex4 = a >= 0 ? 'true' : 'false';
const ex5 = a <= 0 ? 'true' : 'false';
const ex6 = a !== 0 ? 'true' : 'false';
const ex7 = a === test ? 'true' : 'false';
const ex8 = a === 1 ? 'true' : 'false';
const ex9 = 5>a>0 ? 'true' : 'false';
const ex10 = a === 0 || a === 2 ? a +=7 : a /=10;
const ex11 = a <= 0 && b >= 3 ? result = a + b : result = a - b;
const ex12 = 11>a>12 || 14>b>=6 ? 'true' : 'false';
console.log(ex1, ex2, ex3, ex4, ex5, ex6, ex7, ex8, ex9, ex10, ex11, ex12);


const num = +prompt('Write 1, 2, 3 or 4?', '1');
let result;
switch (num) {
    case 1:
        result = ('Winter');
        break;
    case 2:
        result = ('Spring');
        break;
    case 3:
        result = ('Summer');
        break;
    case 4:
        result = ('Autumn');
        break;
    default:
        result = ('Try again');
}
alert(result);



