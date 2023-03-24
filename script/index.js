"use strict";
const userNumber = +prompt('Enter number', '1');
if(userNumber === 1 ) {
    alert(`${userNumber} год`);
} else if(userNumber>1 && userNumber<=4) {
    alert(`${userNumber} года`);
} else if(isNaN(userNumber)) {
    alert('Нужно писать число');
} else {
    alert(`${userNumber} лет`);
}