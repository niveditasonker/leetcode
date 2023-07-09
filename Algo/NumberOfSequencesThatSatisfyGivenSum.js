/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function(nums, target) {
    let count = 0;
    let arr = [1];
    let mod = 10 ** 9 + 7;
    
    nums.sort((a,b) => a-b);

    let left = 0, right = nums.length - 1;

    for (let i=1; i<nums.length; i++){
        arr.push((arr[i-1] * 2) % mod);
    }
    while (left <= right){
        if (nums[left] + nums[right] <= target) {
                count = (count + arr[right-left]) % mod;
                left++
        } else {
            right --;
        }
    }
    

    return count % mod;

};

let nums = [3,5,6,7], target = 9;
console.log(numSubseq(nums, target));