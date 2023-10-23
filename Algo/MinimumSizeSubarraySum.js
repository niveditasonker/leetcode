var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let res = 0;

    while (right < nums.length){
        sum += nums[right];

        while(sum >= target){
            let len = right - left + 1;

            if (res === 0 || len < res) {
                res = len;
            }

            sum -= nums[left];
            left++;
        }
        
        right++;
    }

    return res;
};

let target = 7, nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target,  nums));

target = 4, nums = [1,4,4];
console.log(minSubArrayLen(target,  nums));

target = 11, nums = [1,1,1,1,1,1,1,1];
console.log(minSubArrayLen(target,  nums));