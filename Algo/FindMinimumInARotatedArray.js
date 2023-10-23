var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let mid;

    while (start < end){
        mid = Math.floor((start+end)/2);

        if (nums[mid] > nums[end]){
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return nums[start];
};

let nums = [3,4,5,1,2];
console.log(findMin(nums));

nums = [4,5,6,7,0,1,2];
console.log(findMin(nums));