"use strict";
//Task1
const arr1 = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = 0;
let positive = 0;
for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] > 0) {
        sum += arr1[i];
        positive++;
    }
}
console.log(positive);
console.log(sum);
//Task2
const min = Math.min(...arr1);
console.log(min)
console.log(arr1.indexOf(min));
//Task3
const max = Math.max(...arr1);
console.log(max);
console.log(arr1.indexOf(max));
//Task4
let negative = 0;
for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] < 0) {
        negative--
    }
}
console.log(negative);
//Task5
const positiveNum = arr1.filter(a => a > 0 && a % 2 !==0);
console.log(positiveNum.length);
//Task6
const positiveNum2 = arr1.filter(b => b > 0 && b % 2 === 0);
console.log(positiveNum2.length);
//Task7
let sum7 = 0;
for(let i = 0; i < positiveNum2.length; i++){
    sum7 += positiveNum2[i];
}
console.log(sum7);
//Task8
let sum8 = 0;
for(let i = 0; i < positiveNum.length; i++) {
    sum8 += positiveNum[i];
}
console.log(sum8);
//Task9
const num = arr1.filter(num => num > 1);
const resultNum = num.reduce((a,b) => a * b, 1);
console.log(resultNum);
//Task10
for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== max) {
        arr1[i] = 0;
    }
}
console.log(arr1);

