function missingNumbers(numArr) {
    let res = [];

    for (let i=1; i<numArr.length; i++){
        if(numArr[i] - numArr[i-1] !== 1){
            let currDiff = numArr[i] - numArr[i-1];
            let diff = 1;

            while(diff < currDiff){
                res.push(numArr[i-1]+diff);
                diff++;
            }
        }
    }

    return res;
}

let nums = [10, 11, 14, 17];
console.log(missingNumbers(nums));

nums = [12, 13, 15, 16];
console.log(missingNumbers(nums));