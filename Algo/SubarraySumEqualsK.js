var subarraySum = function(nums, k) {
    let count = 0;
    let map = {};
    // prefix sum is sum before the first element. 
    // In this case before first element sum is 0;
    // Hence initialize the map with 0;
    map[0] = 1;
    let sum = 0;

    for (let n of nums) {
        sum += n;

        if (map[sum-k]) {
            count += map[sum-k];
        }

        if (map[sum]) map[sum]++;
        else map[sum] = 1;
    }

    return count
};

let nums = [1,1,1], k = 2;
console.log(subarraySum(nums, k));

nums = [1,2,3], k = 3;
console.log(subarraySum(nums, k));
