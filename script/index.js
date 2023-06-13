"use strict";
const deepFreeze = (object) => {
    if(object === null || typeof object !== 'object') {
        return object;
    }
    const property = Object.getOwnPropertyNames(object);
    for(const part of property) {
        object[part] = deepFreeze(object[part]);

    }
    return Object.freeze(object);
}
let user = {
    data: {
        a: 1,
        b: 2,
        c: 3,
        d: {
            a1: 1,
            b1: 2,
            c1: 3,
            d1: {
                a2: 3,
                b2: 3,
                c2: 3,
            }
        },
    }
}
const freezeUser = deepFreeze(user);
console.log(freezeUser);
