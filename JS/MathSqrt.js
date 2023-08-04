function mySqrt(x) {
    if(x < 0 || isNaN(x) || typeof x !== 'number' ) return NaN;
    let start = 0, end = Math.floor(x/2);
    let ans = 1;

    while (start <= end){
        const mid = Math.floor((start+end)/2);
        
        const square = mid*mid;
        console.log(`start: ${start}, mid: ${mid}, end: ${end}, square: ${square}`);
        if (square === x){
            return mid;
        } else if(square < x){
            ans = Math.max(ans, mid);
            start = mid + 1;
        } else {
            end = mid-1;
        }
    }

    return ans;
}

// console.log(mySqrt(0));
// console.log(mySqrt(1));
// console.log(mySqrt(4));
// console.log(mySqrt(2));
// console.log(mySqrt(NaN));
console.log(mySqrt(25));