var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b); // sort the array in ascending order
 let closestSum = nums[0] + nums[1] + nums[2]; // initialize closest sum to the sum of the first three elements

 for (let i = 0; i < nums.length - 2; i++) {
   let left = i + 1;
   let right = nums.length - 1;

   while (left < right) {
     const sum = nums[i] + nums[left] + nums[right];

     if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
       closestSum = sum;
     }

     if (sum < target) {
       left++;
     } else {
       right--;
     }
   }
 }

 return closestSum;
};

nums = [-1,2,1,-4], target = 1;
console.log(threeSumClosest(nums, target));

nums = [0,0,0], target = 1;
console.log(threeSumClosest(nums, target));