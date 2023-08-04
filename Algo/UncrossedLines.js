/*
We start by initializing the DP array with zeros and
then fillingit based on the values in the input arrays.
For each element in nums1 and nums2, we check if they
are the same or not.
If they are the same, it means we can form a new uncrossed
line using those elements.
We increment the value in DP array corresponding to the
previous elements in both arrays by one.
If the elements are not the same, we take the maximum
of the values in the DP array corresponding to the previous
element of nums1 and nums2.
We store this maximum value in the DP array at the current index.
After filling the DP array, the maximum number of uncrossed lines
will be stored in the last cell of the DP array, which we return as the final answer.

Complexity
Time complexity: O(m∗n)O(m*n)O(m∗n)
*/

// Problem same as longest common subsequence
var maxUncrossedLines = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;

    let dp = new Array(m+1);
    console.log(dp);

    for (let i=0; i<=m; i++){
        dp[i] = new Array(n+1).fill(0);
    }

    console.log(dp);

    for (let i=1; i<=m; i++){
        for (let j=1; j<=n; j++){
            if (nums1[i-1] === nums2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
                console.log("if same: ", dp);
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
                console.log("if not same: ", dp);
            }
        }
    }

    return dp[m][n];
};

let nums1 = [1,4,2], nums2 = [1,2,4];
console.log(maxUncrossedLines(nums1, nums2));

