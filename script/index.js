"use strict";
const goods = [['футболка', 15], ['шорти', 25], ['носки', 5]];
function totalCost (goods) {
    const searchGoods = new Map();
    goods.forEach(([good, price]) => {
        searchGoods.set(good, price)
    })
    function sumPrice(map) {
        let sum = 0;
        for(let key of map.values()){
            sum +=key;
        }
        return sum;
    }
    const total = sumPrice(searchGoods);
    return total;
}

console.log(totalCost(goods));


