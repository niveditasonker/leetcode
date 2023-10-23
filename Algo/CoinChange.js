
//lower solution is better
var coinChange = function(coins, amount) {
    const dp = Array(amount+1).fill(Infinity); // This arr tells us how many coins we need for each amount.
    dp[0] = 0; // To make 0, we need 0 coins.

    for (let coin of coins){
        for (let i=coin; i<=amount; i++){ // Iterate through the entire amount from coin
            dp[i] = Math.min(dp[i], dp[i-coin]+1);  // Update minimum number of needed coins.
        }
    }

    console.log(dp);
    return dp[amount] === Infinity ? -1 : dp[amount]; // If the last element is Infinity, then we cannot make the amount.
};

var coinChange2 = function(coins, amount) { 
    let result = countCoinChange(coins, amount)
    return result === Infinity ? -1 : result
};

const countCoinChange = (coins, amount, memo={}) => {
    if(amount === 0) return 0
    if(amount < 0) return Infinity
    if(memo[amount] !== undefined) return memo[amount]

    let min = Infinity 

    for(let coin of coins) {
        const restAmount = amount - coin;

        /*
        The addition of 1 (+1) in the next line is because we're considering using
        one more coin to make up the amount for the current subproblem.

        In the context of the coin change problem, we're trying to find the minimum
        number of coins needed to make up the given amount. Each time we use a coin
        to reduce the remaining amount, we increment the count of coins used by 1.
        */
        min = Math.min(countCoinChange(coins, restAmount, memo) + 1, min) 
    }

    memo[amount] = min
    return memo[amount] 
}
// Time complexity: O(n∗m)
let coins = [1,2,5], amount = 11;
console.log(coinChange(coins, amount));