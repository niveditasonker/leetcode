var singleNonDuplicate = function(nums) {
    let left = 0, right = nums.length-1;

    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        // let mid = left + right >>> 1; // unsigned bit operation
        if (mid %2 !== 0) mid --;

        const value = nums[mid];

        if (value !== nums[mid+1] && value !== nums[mid-1]) {
            return value;
        }

        if (value === nums[mid - 1]) right = mid;
        else left = mid + 1;
    }
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));

console.log(singleNonDuplicate([3,3,7,7,10,11,11]));

const singleNonDuplicateBruteForce = nums => {
    //Compare consecutive numbers and increment by 2 in each iteration
    for (let i = 0; i < nums.length - 1; i += 2) {
        if (nums[i] != nums[i + 1]) {
            return nums[i];
        }
    }
    return nums[nums.length - 1]; // The last element is the only single element.
}

console.log(singleNonDuplicateBruteForce([1,1,2,3,3,4,4,8,8]));

console.log(singleNonDuplicateBruteForce([3,3,7,7,10,11,11]));