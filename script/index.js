"use strict";
const foo = (length = 100) => {
    const arr = [];
    const numRandom = () => {
        if (arr.length === length) return NaN;
        const num = Math.floor((Math.random() * length) + 1);
        if(arr.includes(num)) return numRandom();
        arr.push(num);
        return num;
    }
    return numRandom;
}
const numGeneration = foo();
let func = true;
while(func) {
    const getNum = numGeneration();
    if(isNaN(getNum)) func = false;
    console.log(getNum)
}
