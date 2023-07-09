function largestDiff(nums){
    let diff = nums[1] - nums[0];
    let currSum = diff;
    let maxDiff = 0;

    for (let i=1; i< nums.length-1; i++){
        diff = nums[i+1] - nums[i];
        console.log(`diff: ${diff}, currSum: ${currSum}`);
        if (currSum > 0 ) {
            currSum += diff;
        } else {
            currSum = diff;
        }

        maxDiff = Math.max(maxDiff, currSum);
    }

    return maxDiff;
}

function largestDiff2(arr) {
    if(arr.length < 2) return 0;
    let min = Infinity;
    let max = -Infinity;
  
    for(let i= 0 ;i< arr.length;i++) {
      min = Math.min(arr[i], min);
      max = Math.max(arr[i], max);
    }
  
    return Math.abs(min-max);
  }

// console.log(largestDiff([-1, 2,3,10, 9]));
// console.log(largestDiff([]));
// console.log(largestDiff([1]));
console.log(largestDiff([2,59,37,57,10,30]));