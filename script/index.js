"use strict";
function func(arr) {
    if(arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result.concat(func(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(func(5));