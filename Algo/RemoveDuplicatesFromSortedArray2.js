var removeDuplicates = function(nums) {
    let k=0;

    if (nums.length === 0){
        return 0;
    }

    for (let i=1; i<nums.length; i++){
        if (nums[k] !== nums[i] || (nums[k] !== nums[k-1] && nums[k] == nums[i])){
            k++;
            nums[k] = nums[i];
        }
    }

    return k+1;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));