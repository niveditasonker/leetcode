var canJump = function(nums) {
    let right = nums.length-1;
    console.log(right);

    for (i=right; i>= 0; i--){
        const possibleToJump = right <= (i+nums[i]);

        if (possibleToJump){
            right = i;
        }
    }

    return right === 0;
};

let nums = [2,3,1,1,4];
console.log(canJump(nums));

nums = [3,2,1,0,4];
console.log(canJump(nums));