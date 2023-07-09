const isInvalid = (transaction, map) => {
    const [name, time, amount, city] = transaction.split(',')
  
    if (amount > 1000) return true;
  
    const prevTrans = map[name];
  
    for (const txn of prevTrans) {
      if (city !== txn.city && Math.abs(time - txn.time) <= 60) return true
    }
  
      return false
}
  
const invalidTransactions = transactions => {
    const output = []
    const map = {}
        
    for (const txn of transactions) {
      const [name, time, amount, city] = txn.split(',')
      
      if (name in map){
        map[name].push({ time, city });
      } else {
        map[name] = [{ time, city }]
      }

    }
      
    for (const txn of transactions) {    
      if (isInvalid(txn, map)) output.push(txn);
    }
    
    return output
};


// Not fully correct
var invalidTransactions2 = function(transactions) {
    let output = [];
    let prevName, prevAmt, prevCity, prevTime;
    // for (let i=1; i<transactions.length;i++){
    for (let txn of transactions){
        const [name, time, amt, city] = txn.split(',');
        // console.log(transactions[i]);
        // const [name, time, amt, city] = transactions[i].split(',');
        console.log(`name: ${name}, time: ${time}, amt: ${amt}, city: ${city}`)
        
        if (amt > 1000){
            output.push(txn);
        }

        if (name !== prevCity && Math.abs(time - prevTime) <= 60) {
            output.push(txn);
            const str= [prevName, prevTime, prevAmt, prevCity].join(',')
            output.push(str);
        }

        // prevAmt = amt;
        // prevTime = time;
        // prevCity = city;
        [prevName, prevTime, prevAmt, prevCity] = [name, time, amt, city];
    }

    return output;
};

let transactions = ["alice,20,800,mtv","alice,50,100,beijing"];
console.log(invalidTransactions(transactions));