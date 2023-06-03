var countOdds = function(low, high) {
    let count =0;

    while (low <= high) {
        if (low % 2 !== 0) {
            count++;
        }
        low++;
    }
    return count;
};

let low = 3, high = 7;
console.log(countOdds(low, high));

low = 8, high = 10;
console.log(countOdds(low, high));