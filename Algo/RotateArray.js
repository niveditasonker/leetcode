/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k= k%nums.length;
    console.log(k);
    // reverse left side
    reverse(nums, 0, nums.length-k-1);

    // reverse right side
    reverse(nums, nums.length-k, nums.length-1);
    
    // reverse all
    reverse(nums, 0, nums.length-1);
};

const reverse = (arr, i , j) => {
    while(i<j) {
        let tmp = arr[i];
        arr[i++] = arr[j];
        arr[j--] = tmp;
    }
}

let nums = [-1,-100,3,99], k = 2;
rotate(nums, k);
console.log(nums);

nums = [1,2,3,4,5,6,7], k = 3;
rotate(nums, k);
console.log(nums);
