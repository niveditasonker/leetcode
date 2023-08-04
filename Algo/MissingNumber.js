var missingNumber = function(nums) {
    let numSet = new Set();

    const min = Math.min(...nums);
    const max = Math.max(...nums);

    for (let i=min; i<=max; i++){
        if(!numSet.has(i)){
            numSet.add(i);
        }
    }

    for(let n of nums){
        numSet.delete(n);
    }

    const [rem] = numSet;
    return rem;
    //https://bobbyhadz.com/blog/javascript-get-first-element-of-set

};

var missingNumberFormula = function(nums) {
    let n = nums.length;
    let sum = (n * (n+1))/2;
    // console.log(`sum: ${sum}, ${n}`);

    for (const num of nums){
        sum -= num;
    }

    return sum;
}

let nums = [3,0,1];
console.log(missingNumber(nums));
console.log(missingNumberFormula(nums));