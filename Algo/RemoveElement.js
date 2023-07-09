var removeElement = function(nums, val) {
    let notDuplicates = 0;

    for (let i=0; i<nums.length; i++){
        if (nums[i] !== val){
            nums[notDuplicates++] = nums[i];
        }
    }

    return notDuplicates;
};

let nums = [3,2,2,3], val = 3;
console.log(removeElement(nums, val));