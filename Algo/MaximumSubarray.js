var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = 0;

    for (let i=0; i<nums.length; i++){
        if (currSum < 0){
            currSum = 0;
        }
        currSum += nums[i];
        maxSum = Math.max(currSum, maxSum);
    }

    return maxSum;
};
let nums = [-2,1,-3,4,-1,2,1,-5,4];
console.log(maxSubArray(nums));