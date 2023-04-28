"use strict";
//Task1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
//Task2
const arr3 = [1, 2, 3];
console.log(arr3.reverse());
//Task3
const arr4 = [1, 2, 3];
arr4.push(4, 5, 6)
console.log(arr4);
//Task4
const arr5 = [1, 2, 3];
arr5.unshift(4, 5, 6);
console.log(arr5);
//Task5
const arr6 = ['js', 'css', 'jq'];
console.log(arr6[0]);
//Task6
const arr7 = ['js', 'css', 'jq'];
console.log(arr7[2]);
//Task7
const arr8 = [1, 2, 3, 4, 5];
const arr8New = arr8.slice(0, 3);
console.log(arr8New);
//Task8
const arr9 = [1, 2, 3, 4, 5];
const arr9New = arr9.slice(3);
console.log(arr9New);
//Task9
const arr10 = [1, 2, 3, 4, 5];
arr10.splice(1, 2);
console.log(arr10);
//Task10
const arr11 = [1, 2, 3, 4, 5];
const arr11New = arr11.slice(1, 4);
console.log(arr11New);
//Task11
const arr12 = [1, 2, 3, 4, 5];
arr12.splice(3,0, 'a', 'b', 'c');
console.log(arr12);
//Task12
const arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 0, 'a', 'b');
arr13.splice(6, 0, 'c');
arr13.splice(8,0, 'e');
console.log(arr13);
//Task13
const arr14 = [3, 4, 1, 2, 7];
console.log(arr14.sort());
//Task14
const arr15 = [5, 6, 7, 8, 9];
const arr15Result = arr15.reduce((sum, current) => sum + current, 0);
console.log(arr15Result);
//Task15
const arr16 = [5, 6, 7, 8, 9];
console.log(arr16.map(arr16 => arr16 ** 2));
//Task16
const arr17 = [1, -3, 5, 6, -7, 8, 9, -11];
const arr17New = arr17.filter(arr17 => arr17 < 0);
console.log(arr17New);
//Task17
const arr18 = [1, -3, 5, 6, -7, 8, 9, -11];
const arr18New = arr18.filter(arr18 => arr18 % 2 === 0);
console.log(arr18New);
//Task18
const arr19 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const arr19New = arr19.filter(arr19 => arr19.length > 5);
console.log(arr19New);
//Task19
const arr20 = [1, 2, [3, 4], 5, [6, 7]];
const arr20New = arr20.filter(item => Array.isArray(item));
console.log(arr20New);
//Task20
const arr21 = [5,-3, 6,-5, 0,-7, 8, 9];
const arr21New = arr21.filter(arr21 => arr21 < 0);
console.log(arr21New.length);


