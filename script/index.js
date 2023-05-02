"use strict";
const mainFunction = (callback) => {
    const userNumber = +prompt('Enter number');
    const userPower = +prompt('Enter power number');
    callback(userNumber, userPower);
}
const exponentiation = (userNumber, userPower) => {
    const result = Math.pow(userNumber, userPower);
    alert(result);
}
mainFunction(exponentiation);
const multiplay = (userNumber, userPower) => {
    const result = userNumber * userPower;
    alert(result);
}
mainFunction(multiplay);
const division = (userNumber, userPower) => {
    const result = userNumber / userPower;
    alert(result);
}
mainFunction(division);
const modulo = (userNumber, userPower) => {
    const result = userNumber % userPower;
    alert(result);
}
mainFunction(modulo);