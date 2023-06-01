var removeDuplicates = function(nums) {
    let i=0;

    if (nums.length <= 1) return nums.length;
    
    for (let j=i+1; j< nums.length;j++) {
        if (nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
        
        // if not equal move nums[j]
    }
    console.log(nums);
    return i+1;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));

nums = [1,2];
console.log(removeDuplicates(nums));