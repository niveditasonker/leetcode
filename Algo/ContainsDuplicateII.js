var containsNearbyDuplicate = function(nums, k) {

    let map = {};

    for(let i=0;i<nums.length;i++){
        if(map[nums[i]] !== undefined && i-map[nums[i]] <= k){
            return true;
        }
        
        map[nums[i]] = i;
    }

    return false;
};

let nums = [1,2,3,1], k = 3;
console.log(containsNearbyDuplicate(nums, k));