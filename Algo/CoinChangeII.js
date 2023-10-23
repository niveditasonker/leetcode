// Dynamic Programming - Bottom-Up approach
// Time - O(N*A) where A=amount and N=size of coins array
// space - O(A) where A=amount

// Idea is, to stop duplication of combination counting
// We first count all combinations for each value <= amount with
// First coins array denomination then second then third and so on
// And so forth

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    let dp = new Array(amount+1).fill(0); dp[0] = 1;
    
    for(const coin of coins)
        for(let i=1; i<=amount; i++)
            if (coin <= i)
                dp[i] += dp[i-coin];
    
    return dp[amount];
};

let amount = 5, coins = [1,2,5];
console.log(change(amount, coins));