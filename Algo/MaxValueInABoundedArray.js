var maxValue = function(n, index, maxSum) {
    let answer = 1
    let sum = n
    let pointerA = index
    let pointerB = index
    while(sum < maxSum) {
        if (pointerB - pointerA === n-1) {
            answer+= Math.floor((maxSum - sum) / n )
            break;
        }
        sum += pointerB - pointerA + 1
        if (sum <= maxSum) answer++
        if (pointerB < n-1) pointerB++
        if (pointerA > 0) pointerA--
    }
    return answer
};

let n = 4, index = 2,  maxSum = 6;
console.log(maxValue(n,index, maxSum));