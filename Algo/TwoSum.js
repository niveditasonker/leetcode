var twoSum = function(nums, target) {
    let map = {};

    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i];

        if(diff in map) {
            return [map[diff],i];
        } else {
            map[nums[i]] = i;
        }
        // console.log(data);
    }

    return map;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));

var twoSum2 = function(nums, target) {
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = i
    }
    for(let i = 0; i < nums.length; i++){
        let curr = target - nums[i]
        if(obj[curr] && i != obj[curr]) return [i,obj[curr]]
    }
};

console.log(twoSum2([2,7,11,15], 9));
console.log(twoSum2([3,2,4], 6));
console.log(twoSum2([3,3], 6));