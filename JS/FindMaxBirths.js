const bornsArr = [
    {name: 'Rose Roberts', year: 1984},
    {name: 'Chris Cook', year: 1984},
    {name: 'Mary Martin', year: 1984},
    {name: 'Susan Smith', year: 1995},
    {name: 'Rose Roberts', year: 1996},
    {name: 'Rose Roberts', year: 1991},
    {name: 'Susan Smith', year: 2000},
    {name: 'Larry Lewis', year: 1996},
    {name: 'Mary Martin', year: 1984},
    {name: 'Chris Cook', year: 1983},
]

function maxBirth(borns) {
    let map = {};

    for (let k of borns){
        if (!map[k.year]) {
            map[k.year] = 1;
        } else {
            map[k.year]++;
        }
    }

    const values = Object.values(map);
    const maxBirths = Math.max(...values);
    const yearWithMaxBirths = Object.keys(map).filter((k) => {return map[k] === maxBirths});
    console.log(maxBirths, yearWithMaxBirths);
    return yearWithMaxBirths[0];
}

console.log(maxBirth(bornsArr));


function findMaxAmt(){
    const transactions = [
        {id: 't_01', customer: 'Rose Roberts', amount: 84},
        {id: 't_02', customer: 'Chris Cook', amount: 30},
        {id: 't_03', customer: 'Mary Martin', amount: 42},
        {id: 't_04', customer: 'Susan Smith', amount: 26},
        {id: 't_05', customer: 'Rose Roberts', amount: -84},
        {id: 't_06', customer: 'Rose Roberts', amount: 48},
        {id: 't_07', customer: 'Susan Smith', amount: 104},
        {id: 't_08', customer: 'Larry Lewis', amount: 140},
        {id: 't_09', customer: 'Mary Martin', amount: 10},
        {id: 't_10', customer: 'Chris Cook', amount: 60},
        {id: 't_11', customer: 'Susan Smith', amount: -26},
        {id: 't_12', customer: 'Larry Lewis', amount: -140},
        {id: 't_13', customer: 'Rose Roberts', amount: 26},
        {id: 't_14', customer: 'Ryan Roberts', amount: 44},
      ];

    const maxAmount = transactions.reduce((max, transaction) => {
        return transaction.amount > max ? transaction.amount : max;
      }, -Infinity);
      
      console.log(maxAmount);

      const customerWithMaxAmount = transactions.reduce((maxCustomer, transaction) => {
        return transaction.amount > maxCustomer.amount ? transaction : maxCustomer;
      }, { amount: -Infinity });
      
      return customerWithMaxAmount.customer;
}

console.log(findMaxAmt());