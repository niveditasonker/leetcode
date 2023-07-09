var productExceptSelf = function(nums) {
    let len = nums.length;
    let res = [];
    let multiplier = 1;

    for (let i=0; i<len; i++){
        res[i] = multiplier;
        // console.log(`res[i]: ${res[i]}, multiplier: ${multiplier}, nums[i]: ${nums[i]}`);
        multiplier *= nums[i];
    }

    multiplier = 1;
    console.log(res);

    for (let i=len-1; i>=0; i--){
        res[i] *= multiplier;
        // console.log(`res[i]: ${res[i]}, multiplier: ${multiplier}, nums[i]: ${nums[i]}`);
        multiplier *= nums[i];
        // console.log(`Multiplier: ${multiplier}`);
    }

    return res;
};

let nums = [1,2,3,4];
console.log(productExceptSelf(nums));

nums = [-1,1,0,-3,3];
// console.log(productExceptSelf(nums));