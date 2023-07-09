var threeSum = function(nums) {
    let result = [];

    nums.sort((a, b) => a -b);

    for (let i=0; i<nums.length; i++) {
        // prevent duplicate triplets;
        if (i>0 && nums[i] === nums[i-1]) continue;

        // need 2 more pointers
        // i will move slowest, with i as anchor move other two

        let left = i+1;
        let right = nums.length-1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum===0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                
                // prevent duplicate triplets from being checked again
                while(left < right && nums[left] === nums[left-1]){
                    left++;
                }
            } else if (sum > 0){
                right--;
            } else { // sum <0
                left++
            }

            

        }
    }
    return result;
};


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
console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSumClosest([-1,0,1,2,-1,-4]));