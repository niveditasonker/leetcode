/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    for (let i = 0; i< nums.length; i++){
        if (nums[i] === target) return i;
    }

    return -1;
};

let nums = [-1,0,3,5,9,12], target = 9;
console.log(search(nums, target));