var subarraysWithKDistinct = function(nums, k) {
    let len = nums.length;
    return (atMostK(nums,len , k) - atMostK(nums, len, k-1));
};

const atMostK = (arr, n, k) => {
    let count = 0, left = 0, right = 0;
    let seen = new Map();

    while (right < n){
        const cnt = seen.get(arr[right]) || 0;
        seen.set(arr[right], cnt+1);

        // if (seen.has(arr[right])){
        //     seen.set(arr[right], seen.get(arr[right])+1);
        // } else {
        //     seen.set(arr[right], 1);
        // }

        // if seen map size is > k
        // Shrinking the window from left if the
        // count of distinct elements exceeds K
        while(seen.size > k){
            seen.set(arr[left], seen.get(arr[left])-1);

            if (seen.get(arr[left]) === 0){
                seen.delete(arr[left]);
            }
            left++;
        }

        // Adding the count of subarrays with at most
        // K distinct elements in the current window
        count += right - left + 1;
        right++;
    }

    return count;
}

let nums = [1,2,1,2,3], k = 2;
console.log(subarraysWithKDistinct(nums, k));

nums = [1,2,1,3,4], k = 3;
console.log(subarraysWithKDistinct(nums, k));