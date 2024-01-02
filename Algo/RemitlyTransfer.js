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
  }`;
  
  const data = JSON.parse(jsonData).data;
  
  const Remittancely = {
    queue: [],
    dailyBalance: 0,
    totalPenalty: 0,
  };
  
  const enqueueTransfer = (transfer) => {
    Remittancely.queue.push(transfer);
    Remittancely.dailyBalance += 10;
  };
  
  const dispurseTransfer = () => {
    if (Remittancely.queue.length === 0) {
      return "No transfers to disburse today.";
    }
  
    const today = new Date();
    const lateTransfers = Remittancely.queue.filter((transfer) => {
      const deadlineDate = new Date();
      deadlineDate.setDate(deadlineDate.getDate() + transfer.deadline);
      return today > deadlineDate;
    });
  
    if (lateTransfers.length > 0) {
      const lateTransfer = lateTransfers[0];
      const daysLate =
        Math.floor(
          (today - (new Date()) - lateTransfer.deadline * 24 * 60 * 60 * 1000) /
            (24 * 60 * 60 * 1000)
        ) || 0;
      const penalty = daysLate > 0 ? 3 + daysLate - 1 : 3;
      Remittancely.totalPenalty += penalty;
      Remittancely.dailyBalance -= penalty;
      Remittancely.queue = Remittancely.queue.filter(
        (transfer) => transfer !== lateTransfer
      );
      return `Disbursed ${lateTransfer.type} transfer with a penalty of $${penalty} for being late by ${daysLate} day(s).`;
    }
  
    const transferToDisburse = Remittancely.queue.shift();
    Remittancely.dailyBalance -= 10;
    return `Disbursed ${transferToDisburse.type} transfer.`;
  };
  
  data.forEach((transfers) => {
    let totalAmount = 0;
    let deadline = 2; // default deadline for 'economy' transfers
    transfers.forEach((transfer) => {
      totalAmount += transfer.amount;
      if (transfer.type === "express") {
        deadline = 1;
      }
    });
    const transferObj = { totalAmount, deadline };
    enqueueTransfer(transferObj);
  });
  
  console.log(dispurseTransfer());
  console.log(`Daily Balance: $${Remittancely.dailyBalance}`);
  console.log(`Total Penalties: $${Remittancely.totalPenalty}`);
  