var plusOne = function(digits) {
    let res = [];
    let sum = BigInt(digits.join('')) + 1n;

    // console.log(sum.toString().split(''));
    return sum.toString().split('')

};

let digits = [1,2,3];
console.log(plusOne(digits));

digits = [4,3,2,1];
console.log(plusOne(digits));

[9];
console.log(plusOne(digits));