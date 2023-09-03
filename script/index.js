"use strict";
const string = "abracadabra";
function numberUnique(String) {
    const stringSet = new Set();
    for(const every of String){
        stringSet.add(every)
    }
    return stringSet.size
}
console.log(numberUnique(string));