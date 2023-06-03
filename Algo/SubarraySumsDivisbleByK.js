var subarraysDivByK = function(nums, k) {
    let total = 0;
    let map = {};
    map[0] = 1;
    let remainder = 0;

    for (let i=0; i<nums.length; i++) {
        remainder = (remainder + nums[i]) % k;

        if (remainder < 0) {
            remainder += k;
        }

        if (map[remainder]) {
            total += map[remainder];
            map[remainder]++;
        } else {
            map[remainder] = 1;
        }

    }

    console.log(map);

    return total;
};

let nums = [4,5,0,-2,-3,1], k = 5;
console.log(subarraysDivByK(nums, k));

nums= [5], k = 9;
console.log(subarraysDivByK(nums, k));