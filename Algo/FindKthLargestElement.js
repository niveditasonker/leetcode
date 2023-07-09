/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let max = -Infinity;

    for (let n of nums){
        max = Math.max(n, max);
    }

    let map = {};
    for (let n of nums){
        const diff = max - n;
        map[diff] = (map[diff] || 0) + 1;
        // if (map[diff]) {
        //     map[diff]++;
        // } else {
        //     map[diff] = 0;
        // }
    }


    let count = 0;
    let diff = 0;

    while (count < k){
        count+= map[diff] || 0;
        diff++
    }

    return max-diff + 1;
};

let nums = [3,2,1,5,6,4], k = 2;
console.log(findKthLargest(nums, k));