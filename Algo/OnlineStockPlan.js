var StockSpanner = function() {
    this.stockPrices =[];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 1;

    while(this.stockPrices.length && this.stockPrices[this.stockPrices.length-1][0]<= price){
        count += this.stockPrices.pop()[1];
    }

    this.stockPrices.push([price, count]);

    return count;
};

// let ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]];

const sPlanner = new StockSpanner();
console.log(sPlanner.next(100));
console.log(sPlanner.next(80));
console.log(sPlanner.next(60));
console.log(sPlanner.next(70));
console.log(sPlanner.next(60));
console.log(sPlanner.next(75));
console.log(sPlanner.next(85));