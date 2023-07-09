var search = function(nums, target) {
    let st = 0;
    let end = nums.length - 1;
    let mid;

    while(st <= end){
        mid = Math.floor((st+end)/2);

        if (nums[mid] === target) return mid;

        // after rotating, atleast one side should be sorted
        // check if left side is sorted
        if (nums[st] <= nums[mid]){
            if (nums[st] <= target && target <= nums[mid]) {
                // target is on left side;
                end = mid - 1;
            } else {
                // target is on right side;
                st = mid + 1;
            }
        } else {
            // check if right side is sorted
            if (nums[mid] <= target && target <= nums[end]) {
                // target is on right side
                st = mid + 1;
            } else {
                end = mid - 1;
            }
        }

    }
    return -1;
};

let nums = [4,5,6,7,0,1,2], target = 0;
console.log(search(nums, target));

nums = [4,5,6,7,0,1,2], target = 3;
console.log(search(nums, target));

nums = [1], target = 0;
console.log(search(nums, target));

nums = [3,1], target = 1
console.log(search(nums, target));