var maxProfit = function(prices) {
    let sum = 0;

    for (let i=0; i<prices.length; i++) {
        if (prices[i+1] > prices[i]) {
            sum += prices[i+1] - prices[i]
        }
        // min = Math.min(prices[i], min);
        // max = Math.max((prices[i] - min), max);
    }

    return sum;
};

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));