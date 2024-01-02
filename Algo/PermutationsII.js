/*
The difference of this problem with it's prequel is the inputs of the last one are all 'unique'.
Having duplicate numbers in the inputs also means that there will be duplicate outputs.

To prevent this, I could just create a seen variable that holds all the seen permutations but
this will be inefficient since we still need to go through every permutation, even duplicates.

One optimization is to stop the recursion once we know that we are going through the same numbers
again. This is where backtracking becomes handy. First thing to do is to sort the nums array.
Next thing is to use a prev variable that holds the previous element for each iteration.
This prev variable will help us know if we've already gone through the number and mitigate further waste of time and space.
*/

var permuteUnique = function(nums) {
    nums.sort((a, b) => a-b);
    let res = [];

    const recursiveCall = (arr, tmp) => {
        if (!arr.length){
            res.push(tmp);
        }

        let prev = -Infinity;

        for (let i=0; i<arr.length; i++){
            if (arr[i] === prev) continue;

            const newArr = arr.slice(0, i).concat(arr.slice(i+1));
            recursiveCall(newArr, [...tmp, arr[i]]);

            prev = arr[i];
        }
        
    }

    recursiveCall(nums, []);

    return res;
};

let nums = [1,1,2];
console.log(permuteUnique(nums));

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique2 = function(nums) {
    const res = [];
    const countMap = {};

    for (let i = 0; i < nums.length; i++) {

        if (!countMap[nums[i]]) {
            countMap[nums[i]] = 1;
        } else {
            countMap[nums[i]] += 1;
        }
    } 

    dfs(nums, [], countMap, res);
    return res;
};

function dfs(nums, path, countMap, res) {
    if (path.length === nums.length) {
        return res.push([...path]);
    }

    for (const num in countMap) {
        const numCount = countMap[num];
        
        if (numCount === 0) continue;

        path.push(num);
        countMap[num] -= 1;

        dfs(nums, path, countMap, res);

        path.pop();
        countMap[num] += 1;
    }
}