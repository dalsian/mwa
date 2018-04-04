//Ex1
Array.prototype.even = function() {
    return this.filter(n=>n%2===0);
};
Array.prototype.odd = function() {
    return this.filter(n=>n%2===1);
};
console.log([1,2,3,4,5,6,7,8,9,0].even());
console.log([1,2,3,4,5,6,7,8,9,0].odd());