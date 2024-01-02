/*
We are building a money transfer system, Remittancely ©, and our goal is to get our customer’s 
money to their destination. We offer different types of transfers, economy and express with 
different delivery deadlines. We can only send one transfer per day. Remittancely received $10 
when a  transfer is enqueued but whenever the transfer is late, there is a $3 penalty for the 
first day, and a $1 penalty for each day afterwards. Build a system that can take in a stream 
of daily transfers, decide which transfer to dispurse for the day, and weigh the tradeoffs you 
need to make.

Economy - 2 day deadline (by the day after next)
Express - 1 day deadline (by the next day)
Penalties for being late (regardless of transfer type) -  $3 for first day miss, $1 every day after
*/

const jsonData = `{
  "data": [
    [
      {
        "id": "a",
        "amount": 50,
        "type": "economy"
      },
      {
        "id": "b",
        "amount": 20,
        "type": "express"
      }
    ],
    [
      {
        "id": "c",
        "amount": 90,
        "type": "express"
      },
      {
        "id": "d",
        "amount": 330,
        "type": "express"
      }
    ],
    [
      {
        "id": "e",
        "amount": 780,
        "type": "express"
      },
      {
        "id": "f",
        "amount": 10,
        "type": "economy"
      }
    ]
  ]
}
`

const queue = [];
const processTodaysTxn = false;

const enqueueTransactions = (obj) => {
  queue.push(obj);
  processTransaction();
}

const processTransaction = (obj) => {
  // early return 
  if (processTodaysTxn) return;
  const curr = queue.shift();
}


function solution() {
  const dataOfAllDays = JSON.parse(jsonData).data
  let currDay = 0;
  let deadline = 0;

  dataOfAllDays.forEach(transfersOfDay => {
      // day 0

      console.log(transfersOfDay)
      
      // Your code here
      for (const txn in Object.keys(transfersOfDay)){
        console.log(txn);
        if(txn.type === 'express'){
          deadline = currDay + 1;
        } else {
          deadline = currDay + 2;
        }

        // transfer -> 0 + 2, 0 + 1

        const currTransfer = {'id':txn.id, 'amount': txn.amount, 'deadline': deadline}
        enqueueTransactions(currTransfer);
      }
      currDay++;
  });

}

solution()

// transfersOfDay.length > 0
//     [
// this.transfers = [{}]
// currentDate = 0;
// deadline = currentDate + (type ? 'economy': 2 type ? 'express' ? 1)

// if (isLate){
// penalty++
// }
// isLate = currentDate 