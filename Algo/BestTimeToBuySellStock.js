var maxProfit = function(prices) {
    let min = prices[0];
    let max = 0;

    for (let i=0; i<prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
        } else if ((prices[i] - min) > max) {
            max = prices[i] - min;
        }
        // min = Math.min(prices[i], min);
        // max = Math.max((prices[i] - min), max);
    }

    return max;
};

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));

prices = [89, 70, 55, 30, 20, 11];
console.log(maxProfit(prices));