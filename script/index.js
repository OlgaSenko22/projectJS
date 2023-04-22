"use strict";
const arr = [1, 2, 3, -1, -2, -3];
const foo = (arr) => {
    const exampleArr = [];
    if(!arr.length) return 'the array is empty';
    for(let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if(num>0) exampleArr.push(num);
    }
    return exampleArr.length ? exampleArr : null;
}
const exampleArr = foo(arr);
console.log(exampleArr);