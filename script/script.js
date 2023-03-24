"use strict";
//Task1
const x = 10;
const y = 7;
const result = x > y ? 'x is greater than y' : 'x is not greater than y';
console.log(result);

//Task2
const num = +prompt('Enter number', '1');
if(num % 2 === 0) {
    alert('Number '+ num +' is even');
} else {
    alert('Number '+ num +' is not even');
}

//Task3
const userNumber = +parseInt(prompt('Enter number', '10'));
const a = `${userNumber}`;
let result;
let messageUserNumber;
switch (a.length) {
    case 1:
        result = 'a one-digit';
        break;
    case 2:
        result = 'a two-digit';
        break;
    case 3:
        result = 'a three-digit';
        break;
    case 4:
        result = 'a four-digit';
        break;
    case 5:
        result = 'a five-digit';
        break;
    default:
        result = 'a n-digit';
}
if(userNumber>0) {
    messageUserNumber = 'positive';
} else if (userNumber === 0) {
    messageUserNumber = 'is not positive or negative';
} else {
    messageUserNumber = 'negative';
}
console.log(`Number ${userNumber} ${result} ${messageUserNumber}`);

//Task4
const a = +prompt('Enter first number', '1');
const b = +prompt('Enter second number', '2');
const c = +prompt('Enter third number', '3');
if(a>b && a>c) {
    alert(`${a}`);
} else if(b>a && b>c) {
    alert(`${b}`);
} else if(c>a && c>b) {
    alert(`${c}`);
} else {
    alert('Try again');
}

//Task5
let a = +prompt('Enter the length of the first side', '1');
let b = +prompt('Enter the length of the second side', '2');
let c = +prompt('Enter the length of the third side', '3');
if((a+b)>c || (b+c)>a || (a+c)>b) {
    alert('A triangle can exist');
} else {
    alert('A triangle can not exist');
}
