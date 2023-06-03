var summaryRanges = function(nums) {
    let res = [];
    for (let i=0; i< nums.length; i++) {
        let first = nums[i];
        while (i+1 <nums.length && nums[i+1] - nums[i] === 1) i++;
        if (nums[i] !== first) {
            res.push(first + '->' + nums[i]);
        } else {
            res.push (first + ' ');
        }
    }

    return res;
};

let nums = [0,1,2,4,5,7];
console.log(summaryRanges(nums));