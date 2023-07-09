var findPeakElement = function(nums) {
    let start = 0; end = nums.length-1; 

    while (start < end) {
        mid = Math.floor((start + end)/2);
        if (nums[mid] > nums[mid+1]) {
            end = mid;
        } else {
            start = mid+1;
        }
    }
    return start;
};

let nums = [1,2,1,3,5,6,4];
console.log(findPeakElement(nums));

nums = [1,2,1,3,5,6,4];
console.log(findPeakElement(nums));