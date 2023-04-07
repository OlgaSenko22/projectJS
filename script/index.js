"use strict";
//TASK1;
for(let a = 10; a<=20; a++) {
    console.log(a);
}
//TASK2;
for(let a = 10; a<=20; a++) {
    console.log(Math.sqrt(a));
}
//TASK3;
for(let a = 1; a<=10; a++) {
    let result = 7 * a;
    console.log(`7 * ${a} = ${result}`);
}
//TASK4;
let sum = 0;
for(let a = 1; a<=15; a++) {
    sum +=a;
}
    console.log(`${sum}`);
//TASK5;
let sum = 15;
for(let a = 15; a<=35; a++) {
    sum *=a;
}
console.log(`${sum}`);
//TASK6;
let sum = 0;
for(let a = 1; a<=500; a++) {
    sum +=a;
    console.log(`${sum}` / 2);
}
//TASK7;
let sum = 30;
for( let a = 30; a <=80; a++) {
    if(a % 2 ===0) {
        sum +=a;
    }
}
console.log(`${sum}`);
//TASK8;
for (let a = 100; a<=200; a++) {
    if(a % 3 === 0) {
        console.log(`${a}`);
    }
}
//TASK9;
let a = Math.floor(Math.random() * 20) + 1;
console.log(a);
for(let i = 2; i * 2 <=a; i++) {
    if(a % i === 0) {
        console.log(`Дільник цього числа ${i} `);
    }
}
//TASK10,11;
let a = Math.floor(Math.random() * 20) + 1;
console.log(a);
for(let i = 2; i * 2 <=a; i++) {
    if(a % i === 0) {
        console.log(`Дільник цього числа ${i} `);
    }
    if(i % 2 === 0) {
        let c = 0;
        c++;
        let d = 0;
        d += i;
        console.log(`Кількість парних дільників ${c}`);
        console.log(`Сума парних дільників ${d}`);
    }
}
//TASK 12
for(let a = 1; a<=10; a++) {
    for(let b = 1; b<=10; b++) {
        let result = a * b;
        console.log(`${a} * ${b} = ${result}`);
    }
}




