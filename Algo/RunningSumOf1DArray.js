var runningSum = function(nums) {
    let sumArr = [];
    let runningSum = 0;

    for (let i=0; i<nums.length; i++) {
        runningSum += nums[i];
        sumArr.push(runningSum);
    }

    return sumArr;
};

let nums = [1,2,3,4];
console.log(runningSum(nums));