"use strict";
const padString = (string, number, symbol, right = true) => {
    if(typeof string !== "string") return 'Some error string!';
    if(typeof number !== "number" || Number.isNaN(number) || !isFinite(number)) return 'Some error number!';
    if(string.length === number) return string;
    if(string.length > number) return string.substring(0, number);
    if(typeof symbol !== "string" || symbol.length !== 1) return 'Some error symbol';
    if(typeof right !== "boolean") return 'Some error boolean';
    const symbols = symbol.repeat(number - string.length);
    return right ?  string + symbols : symbols + string;

}
console.log(padString('hello', 8, '*'));
console.log(padString('hello', 6, '*', false));
console.log(padString('hello', 2));