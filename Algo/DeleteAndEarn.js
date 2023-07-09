/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
    let map = {};

    for (let n of nums){
        // if (!map[n]){
        //     map[n] = 1;
        // } else {
        //     map[n]++;
        // }
        map[n] = map[n] + 1 || 1;
    }

    console.log(map);

    let prevSum = 0, prevKey = -1, currSum = 0;

    for (let key in map){
        const currMax = Math.max(prevSum, currSum);
        key = parseInt(key);

        if (key - 1 !== prevKey){
            currSum = key * map[key] + currMax;
        } else {
            currSum = key * map[key] + prevSum;
        }

        prevSum = currMax;
        prevKey = key;
    }

    return Math.max(prevSum, currSum);
};

let nums = [3,4,2];
console.log(deleteAndEarn(nums));

nums = [2,2,3,3,3,4];
console.log(deleteAndEarn(nums));