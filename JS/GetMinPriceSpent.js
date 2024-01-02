function getContiguousMinPrice(prices){
    const leftSums = prices.slice();
  
    for (let i = 1; i < leftSums.length; i++) {
      leftSums[i] += leftSums[i - 1];
    }
  
    const positions= {};
  
    let minCost = Infinity;
  
    for (let i = 0; i < prices.length; i++) {
      const price = prices[i];
  
      if (price in positions) {
        const from = positions[price];
        const to = i;
  
        const cost = leftSums[to] - leftSums[from] + prices[from];
        minCost = Math.min(minCost, cost);
      }
  
      positions[price] = i;
    }
  
    return minCost === Infinity ? -1 : minCost;
  }