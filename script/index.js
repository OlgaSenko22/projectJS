"use strict";
let userNumber = +prompt('Enter number', '1');
function text (num) {
    let messageUserNumber;
    userNumber = num % 100;
     if(userNumber>=5 && userNumber<=20) {
         messageUserNumber = 'лет';
     } else {
         userNumber = userNumber % 10;
         if(userNumber === 1) {
             messageUserNumber = 'год';
         } else if(userNumber>=2 && userNumber<=4) {
             messageUserNumber = 'года';
         }
         else {
             messageUserNumber = 'лет';
         }
     }
     return messageUserNumber;
}
alert(`${userNumber}` + ' ' + text(userNumber));
