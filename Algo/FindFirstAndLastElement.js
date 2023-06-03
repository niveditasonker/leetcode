var searchRange = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let result =[];

    let idx = binarySearch(left, right, nums, target);

    if (idx === -1) return [-1, -1];

    let leftRange = rightRange = idx;

    while(idx !== -1) {
        leftRange = Math.min(leftRange,idx);
        idx = binarySearch(left, idx-1, nums, target);
    }

    result[0] = leftRange;

    idx = rightRange;

    while(idx !== -1) {
        rightRange = Math.max(rightRange, idx);
        idx = binarySearch(idx+1, right, nums, target);
    }

    result[1] = rightRange;


    return result;
    
};

function binarySearch(l, r, nums, target) {
    if(l > r) return -1;
    let m = Math.floor((l + r)/2);

    if (nums[m] === target) return m;
    if (nums[m] < target) {
        return binarySearch(m+1, r, nums, target);
    } else {
        return binarySearch(l, m-1, nums, target);
    }
}

let nums = [5,7,7,8,8,10], target = 8;
console.log(searchRange(nums, target));

nums = [5,7,7,8,8,10], target = 6;
console.log(searchRange(nums, target));

nums = [1,2,3,4,4,4,5,6], target = 4;
console.log(searchRange(nums, target));


var searchRange2 = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let output = [-1, -1];

    // Binary search for the target (left-biased)
    while (left < right) {
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    // If the target was not found on the first pass
    if (nums[left] != target) {
        return output;
    }

    // Store the left-hand side
    output[0] = left;

    // Reset the right-hand side of the binary search (left-hand side remains as is)
    right = nums.length - 1;

    // Binary search for the target (right-biased)
    while (left < right) {
        let middle = Math.floor((left + right) / 2) + 1;
        if (nums[middle] <= target) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }

    // Store the right-hand side
    output[1] = right;

    return output;
};