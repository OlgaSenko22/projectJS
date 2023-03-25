"use strict";
const x = 4;
const y = 9;
const r = 10;
const z = Math.sqrt(x**2+y**2);
const result = z <= r ? 'given point inside the circle' : 'given point outside the circle';
alert(result);