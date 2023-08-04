var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    let longest = 1;

    for (let i=1; i<nums.length; i++){
        for (let j=0; j<i; j++){
            if (nums[i] > nums[j]){
                dp[i] = Math.max(dp[i], dp[j]+1);
                longest = Math.max(longest, dp[i]);
            }
        }
        
    }
    return longest;
};
/*
The longest increasing subsequence (LIS) at any point is at least 1.

Take the example [10, 9, 2]. At every index, we can't do any worse than 1.
To figure out if we can do better than 1, we'll need to compare two numbers.
This sets the grounds for using two loops to compare nums[i] against nums[j].

If we find that nums[j] < nums[i], we may have found a longer increasing
subsequence at index i.

In plain English, the current num at i is greater than the prev num at j.
Update the LIS at i if the LIS at j plus 1 is greater than it.
In Javascript, Math.max(dp[i], dp[j]+1);
To be able to refer back to previously calculated LIS answers, we'll need to
save them somewhere. This is the basis of our dp array.
*/

let nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));