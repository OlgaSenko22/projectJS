"use strict";
//Task1
const arr1 = ['a', 'b', 'c', 'd'];
const newArr1 = `${arr1[0]} + ${arr1[1]}, ${arr1[2]} + ${arr1[3]}`;
console.log(newArr1);
//Task2
const arr2 = [2, 5, 3, 9];
const result = (arr2[0] * arr2[1]) + (arr2[2] * arr2[3]);
console.log(result);
//Task3
const arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const newArr3 = arr3.join(',');
console.log(newArr3[6]);
//Task4
let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
console.log(obj.js[0]);
//Task5
const func = (n) => {
    const arr5 = [];
    for(let i = 1; i <= n; i++) {
        arr5.push('x'.repeat(i));
    }
    return arr5;
}
console.log(func(5));
//Task6
const func2 = (n) => {
    const arr6 = [];
    for(let i = 1; i <= n; i++) {
        let str = '';
        for(let j = 0; j < i; j++) {
            str +=i;
        }
        arr6.push(str);
    }
    return arr6;
}
console.log(func2(5));
//Task7
const arrFill = (a, b) => {
    const arr7 = [];
    for(let i = 1; i <= b; i++) {
        arr7.push(a);
    }
    return arr7;
}
console.log(arrFill('x',5))
//Task8
const arr8 = [1, 8, 6, 4, 2];
const newArr8 = [];
let add = 0;
for(let i = 0; i < arr8.length; i++) {
   add += arr8[i];
   if(add < 10)  {
       newArr8.push(arr8[i]);
   }
}
console.log(newArr8.length + 1);
//Task9
const arr9 = [1, 2, 3, 4, 5, 6];
const newArr9 = [];
for (let i = arr9.length-1; i >= 0; i--) {
    newArr9.push(arr9[i]);
}
console.log(newArr9);
//Task10
const arr10 = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for(let i = 0; i < arr10.length; i++){
    for(let j = 0; j < arr10[i].length; j++) {
        sum += arr10[i][j];
    }
}
console.log(sum);
//Task11
const arr11 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sumArr = 0;
for(let i = 0; i < arr11.length; i++) {
    for(let j = 0; j < arr11[i].length; j++) {
        for(let c = 0; c < arr11[i][j].length; c++) {
            sumArr += arr11[i][j][c];
        }
    }
}
console.log(sumArr);






