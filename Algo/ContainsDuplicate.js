var containsDuplicate = function(nums) {
    let duplicateSet = new Set();

    for (let n of nums){
        if (duplicateSet.has(n)) {
            return true;
        }else {
            duplicateSet.add(n);
        }
    }
    return false;
};

let nums = [1,2,3,1];
console.log(containsDuplicate(nums));

nums = [1,2,3,4];
console.log(containsDuplicate(nums));

nums = [1,1,1,3,3,4,3,2,4,2];
console.log(containsDuplicate(nums));