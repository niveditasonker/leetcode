var checkSubarraySum = function(nums, k) {
    let sum = 0;
    let prefix = 0;
    let map = new Set();

    for (let n of nums) {
        sum += n;

        if (k !== 0) {
            sum %= k;
        }

        if(map.has(sum)) return true;

        console.log(`prefix: ${prefix}, n: ${n}`);

        map.add(prefix);
        console.log(map);

        // console.log(`prefix: ${prefix}, n: ${n}`);
        // console.log(map);
        prefix = sum;
    }
    return false;

};

let nums = [23,2,4,6,7], k = 6;
console.log(checkSubarraySum(nums, k));