"use strict";
let calculator = {
    read() {
        this.a = prompt('Enter first number', '1');
        while(isNaN(this.a) || this.a === null || this.a.trim() === '') {
            this.a = prompt('Enter first number', '1');
        }
        this.b = prompt('Enter second number', '2');
        while(isNaN(this.b) || this.b === null || this.a.trim() === '') {
            this.b = prompt('Enter second number', '2');
        }
    },
    sum() {
        return Number(this.a) + Number(this.b);
    },
    mul() {
        return Number(this.a) * Number(this.b);
    }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());

