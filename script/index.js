"use strict";
const indexOf = (arr, searchElement, fromIndex = 0) => {
    for(let i = fromIndex; i < arr.length; i++ ) {
        if(arr[i] === searchElement ) return i;
    }
    return -1;
}
indexOf();
const lastIndexOf = (arr, searchElement, fromIndex = arr.length - 1) => {
    for(let i = fromIndex; i >=0; i--) {
        if(arr[i] === searchElement ) return i;
    }
    return -1;
}
lastIndexOf();
const find = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr )) return arr[i];
    }
    return undefined;
}
find();
const findIndex = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) return i;
    }
    return -1;
}
findIndex();
const includes = (arr, value) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === value) return true;
    }
    return false;
}
includes();
const ever = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if(!callback(arr[i], i, arr)) return false;
    }
    return true;
}
ever();
const some = (arr, callback) => {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i, arr)) return true;
    }
    return false;
}
some();

