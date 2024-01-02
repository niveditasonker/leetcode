function balanceAccounts(accounts, threshold) {
    const sortedAccounts = Object.entries(accounts).sort((a, b) => a[1] - b[1]);
    console.log(sortedAccounts);
    let i = 0;
    let j = sortedAccounts.length - 1;
    const transactions = [];

    while (i < j) {
        const diff = threshold - sortedAccounts[i][1];
        if (diff > 0) {
            const transfer = Math.min(diff, sortedAccounts[j][1] - threshold);
            console.log(transfer);
            if (transfer > 0) {
                transactions.push(`${sortedAccounts[j][0]} -> ${sortedAccounts[i][0]} = ${transfer}`);
                sortedAccounts[i][1] += transfer;
                sortedAccounts[j][1] -= transfer;
            }
        }
        if (sortedAccounts[i][1] >= threshold) i++;
        if (sortedAccounts[j][1] <= threshold) j--;
    }
    return transactions;
}

const accounts = {
    Account1: 130,
    Account2: 90,
    Account3: 70,
    Account4: 150,
};

const threshold = 100;
const result = balanceAccounts(accounts, threshold);
console.log(result);
