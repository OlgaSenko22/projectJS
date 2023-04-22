"use strict";
const fib = (n = 1) => {
    let f1 = 1;
    let f2 = f1;
    for( let i = 3; i<=n; i++) {
        let F = f1 + f2;
        f1 = f2;
        f2 = F;
    }
    return f2;
}
alert(fib(77));