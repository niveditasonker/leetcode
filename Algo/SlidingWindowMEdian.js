/*
for loop: O(n)
sort(): O(k log k)
Math.ceil() and Math.floor(): O(1)
push() and pop(): O(1)
Therefore, the overall complexity of the program is O(n log k).
*/

var medianSlidingWindow = function(nums, k) {
    const medianArr = [];
    let copyArr = [];
    const res = [];
    const isEven = k%2 == 0;

    for (let i=0; i<nums.length; i++){
        medianArr.push(nums[i]);

        if(i >= k-1){
            copyArr = [...medianArr].sort((a,b) => a-b);
            let median;

            if (isEven){
                median = (copyArr[k/2] + copyArr[(k/2)-1])/2;
            } else {
                median = copyArr[Math.ceil(k/2 - 1)];
            }

            res.push(median);
            medianArr.shift();
        }
    }

    return res;

};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow2 = function (nums, k) {
    let frame = []
    let medians = []
    
  
    const binarySearch = (array, value) => {
      let start = 0;
      let end = array.length - 1;
      console.log("===> array: ", array);
  
      while (start <= end) {
        let midIndex = Math.floor((start + end)/2);
        if (array[midIndex] === value)
          return midIndex
        else if (array[midIndex] < value)
          start = midIndex + 1
        else end = midIndex - 1
      }
      return start
    }
  
    for (let i = 0; i < nums.length; i++) {
        if (i >= k){
          console.log("===> i > k: ", i, i-k);
            const val = binarySearch(frame, nums[i - k]);
            console.log("===> val: ", val);
            frame.splice(val,1);
        }
  
      console.log(frame);
      let frameIndex = binarySearch(frame, nums[i]);
      console.log("===> frameIndex: ", frameIndex);

      frame.splice(frameIndex, 0, nums[i]);
      console.log(frame);

      if (i >= k - 1) {
        console.log("===> In here: ", i);
        
        // The expression (k >> 1)-1 in JavaScript is a bit-shift operation that divides
        // the value of k by 2 and then subtracts 1.
        // For example, if k is 10, then (k >> 1)-1 will be 5.

        // const kPrev = (k >> 1)-1;
        const kPrev = k%2 - 1

        // Just divides by 2
        // const kCurrOrNext = k >> 1;
        const kCurrOrNext = k %2;

        medians.push(k % 2 === 1
          ? frame[kCurrOrNext]
          : (frame[kPrev] + frame[kCurrOrNext]) / 2
        )
      }
    }
  
    return medians
};

let nums = [1,3,-1,-3,5,3,6,7]; let k=3
// console.log(medianSlidingWindow(nums, k));
console.log(medianSlidingWindow2(nums, k));
//https://leetcode.com/problems/sliding-window-median/solutions/520663/javascript-solution-beats-98-81/
// 3rd solution