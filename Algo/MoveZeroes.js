/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    
    // loop on the arr
    for (let i=0; i<nums.length; i++ ) {
        //compare element at i & j
        if (nums[i] !== 0) {
            // if element at j not 0 , move j to i
            nums[j] = nums[i];
            j++;
        }
    }
    //when j reaches the end, all non 0 are to the left of the array
    // append remaining indexes with 0
    while(j < nums.length) {
        nums[j++] = 0;
    }
    return nums;
};

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));