

const doubleEachElement = (arr) => {
   return arr.map((currentValue, index)=> currentValue =currentValue *2  );
}
let arr = [175, 50, 25];
console.log(doubleEachElement(arr));

const doubleTheArrLen = (arr) => {
    const double = arr.reduce((acc, idx) => acc.concat([idx, idx]), []);
    console.log(double);
    
    // old way
    const newArr = [];
    arr.forEach((el)=> {
        newArr.push(el,el);
    });

    return newArr;
}
console.log(doubleTheArrLen(arr));

console.log([175, 50, 25].reduce((accumulator, currentValue, index, array) => array[index] = array[index] * 2));

const printUnique = (nums) => {
    let set = new Set(nums);
    return [...set];
}

let nums = [1, 2, 2, 4, 5, 6, 6];
console.log(printUnique(nums));

//How can you determine if a number is an integer in JavaScript?
const isInt = (num) => num % 1 === 0;
console.log(isInt(4));

const getDifference = (nums) => {
    console.log(nums);

    //readble way
    function diff(total, curr){
        return total-curr;
    }
    console.log(nums.reduce(diff));

    return nums.reduce((acc, curr) => acc-curr);
}

console.log("Difference: ", getDifference(arr));

const getSum = (nums) => {
    // Readable way
    function sum(total, curr){
        return total+curr;
    }
    console.log(nums.reduce(sum));
    return nums.reduce((acc, curr) => acc+curr);
}
console.log("Sum: ", getSum(arr));