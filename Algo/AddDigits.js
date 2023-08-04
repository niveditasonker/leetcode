var addDigits = function(num) {
    if(num===0){
        return 0;
    }

    if(num%9==0){
        return 9;
    } else {
        return num%9;
    }
};
let num = 38;
console.log(addDigits(num));

num = 0;
console.log(addDigits(num));

num = 87;
console.log(addDigits(num));