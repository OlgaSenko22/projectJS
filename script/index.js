"use strict";
//Task1
const example1 = Boolean(Number('10')) + 1;
const example2 = 'sub' + Number(false);
const example3 = 16 * '  91 ';
const example4 = true - 70;
const example5 = Number(1 + String(1)) + 1;
console.log(example1); // 2;
console.log(example2); // sub0;
console.log(example3); // 1456;
console.log(example4); // -69;
console.log(example5); // 12;

//Task2
const userQuestion = +prompt('What time is it?', '1');
const result = `${userQuestion}` * 3600;
if(`${userQuestion}`<=24) {alert('In' + `${userQuestion}` + 'hour' + `${result}` + 'seconds');}

//Task3
let num = 1;
num+=12;
num-=14;
num*=5;
num/=7;
num++;
num--;
//alert(num);


