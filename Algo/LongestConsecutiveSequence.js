var longestConsecutive = function(nums) {
    let set = new Set();
    let maxCount = 0;

    for (let num of nums){
        set.add(num);
    }

    for (let num of nums){
        if(!set.has(num-1)) {
            let count = 0;
            let currNum = num;

            while(set.has(currNum)){
                currNum++;
                count++;
            }
            maxCount = Math.max(count, maxCount);
        }
    }

    return maxCount;
};

let nums = [100,4,200,1,3,2];
console.log(longestConsecutive(nums));