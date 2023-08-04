/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length;
    let n = text2.length;

    let dp = new Array(m+1);
    console.log(dp);

    for (let i=0; i<=m; i++){
        dp[i] = new Array(n+1).fill(0);
    }

    console.log(dp);

    for (let i=1; i<=m; i++){
        for (let j=1; j<=n; j++){
            if (text1[i-1] === text2[j-1]){
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

let text1 = "abcde", text2 = "ace" ;
console.log(longestCommonSubsequence(text1, text2));
// Problem same as uncrossed lines