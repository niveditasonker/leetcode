/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let arr = [0]; let j = 0;

    for (let i=0; i<nums.length; i++){
        if (nums[i] % 2 == 0){
            console.log("===> even: ", j, arr[j]);
            arr[j]++;
            console.log("===> after increment: ", j, arr[j]);
        } else {
            j++;
            arr[j] = 0;
             console.log("===> odd, increment: ", j, arr[j]);
        }
    }

    console.log(arr);

    let output = 0;
    for (let i=1; i <= arr.length-k; i++){
        // It adds (arr[i-1] + 1) * (arr[i+k-1] + 1) to output,
        // where arr[i-1] represents the count of even numbers before the start of the subarray,
        // and arr[i+k-1] represents the count of even numbers after the end of the subarray.
        output += (arr[i-1]+1) * (arr[i+k-1]+1);
    }

    return output;
};

/*
arr[i-1] represents the count of even numbers before the start of the subarray.
Since the elements in arr correspond to the counts of even numbers in the subarrays,
arr[i-1] gives us the count of even numbers from the beginning of the array up to the start of the current subarray.

arr[i+k-1] represents the count of even numbers after the end of the subarray.
Similarly, arr[i+k-1] provides us with the count of even numbers from the end
of the current subarray to the end of the array.

Adding 1 to arr[i-1] and arr[i+k-1] is necessary because we need to consider
the count of even numbers in the subarray itself as well. By adding 1,
we include the current element in the subarray's count.

Multiplying (arr[i-1] + 1) by (arr[i+k-1] + 1) gives us the total number of combinations
possible between the even numbers before the subarray and the even numbers after the subarray.
Each even number before the subarray can be combined with each even number after the subarray,
resulting in the total count of subarrays containing exactly k odd numbers.
*/

let nums = [1,1,2,1,1], k = 3;
console.log(numberOfSubarrays(nums, k));

nums = [2,4,6], k = 1;
console.log(numberOfSubarrays(nums, k));
