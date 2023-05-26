// Given an integer n, return a counter function. This counter function initially returns n
// and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// let n = 2;

// let callFlag = 0;

// function counter() {
//     callFlag++;

//     if (callFlag === 1) {
//         return n;
//     } else {
//        return n += 1;
//     }
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());

let callFlag = 0; 

var createCounter = function(n) {
    return function() {
        return n++;
    };
};

const counter = createCounter(10)
console.log(counter()); // 10
console.log(counter()); // 11
console.log(counter());
