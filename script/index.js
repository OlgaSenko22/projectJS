"use strict";

//Task1
const numOrStr = prompt('Input number to string');
const result =
    numOrStr === null ? 'вы отменили' :
        numOrStr.trim() === '' ? 'Empty String' :
            isNaN( +numOrStr ) ? ' number is Ba_NaN' : 'OK!';
console.log(result);

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