var pivotIndex = function(nums) {
    let left = 0;
    let right = nums.reduce((a, b) => a +b);

    for (let i=0; i < nums.length; i++) {
        const curr = nums[i];

        right -= curr;

        if (left === right) return i;

        left += curr;
    }

    return -1;
};

let nums = [1,7,3,6,5,6];
console.log(pivotIndex(nums));

nums = [1,2,3];
console.log(pivotIndex(nums));

nums = [2,1,-1];
console.log(pivotIndex(nums));