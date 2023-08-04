var filter = function(arr, fn) {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    // console.log(result);
    return result;
};

const testCase1 = [0,10,20,30], fn1 = function greaterThan10(n) { return n > 10; };
console.log(filter(testCase1,fn1));

const testCase2 = [1,2,3], fn2 = function firstIndex(n, i) { return i === 0; };
console.log(filter(testCase2,fn2));

const testCase3 = [-2,-1,0,1,2], fn3 = function plusOne(n) { return n + 1 };
console.log(filter(testCase3,fn3));