"use strict";

//Task1
const userQuestion = +prompt('In what year was the city of Kiev founded?');
const result = userQuestion===482 ? 'True' : 'Go to study a history!';
alert(result);


//Task2
const numOrStr = prompt('Input number to string');
console.log(numOrStr);
switch (numOrStr) {
    case numOrStr === null:
        console.log('вы отменили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
        break;
}