/**
 * @param {number[]} nums
 * @return {number}
 */
/*
Logic:

Step 1: Initialize Pointers
First, we initialize two pointers, slow and fast, both set to nums[0].
This is the starting point for both pointers, and it's done to set up the
conditions for Floyd's cycle detection algorithm.

Step 2: Detect a Cycle
In this step, we enter a while loop where the slow pointer moves one step
at a time (slow = nums[slow]), while the fast pointer moves two steps
(fast = nums[nums[fast]]). The loop continues until both pointers meet at
some point within the cycle. Note that this meeting point is not necessarily
the duplicate number; it's just a point inside the cycle.

Why does this happen? Because there is a duplicate number, there must be a 
cycle in the 'linked list' created by following nums[i] as next elements.
Once a cycle is detected, the algorithm breaks out of this loop.

Step 3: Find the Start of the Cycle (Duplicate Number)
After identifying a meeting point inside the cycle, we reinitialize the
slow pointer back to nums[0]. The fast pointer stays at the last meeting point.
Now, we enter another while loop where both pointers move one step at a time.
The reason behind this is mathematical: according to Floyd's cycle detection 
algorithm, when both pointers move at the same speed, they will eventually
meet at the starting point of the cycle. This is the duplicate number we are looking for.

Step 4: Return the Duplicate Number
Finally, when the slow and fast pointers meet again, the meeting point will be the duplicate number, and we return it as the output.


*/

var findDuplicate = function(nums) {
    let slow = 0;
    let fast = 0;

    do {
        console.log("1", slow, fast);
        slow = nums[slow];
        fast = nums[nums[fast]];
        console.log("2",slow, fast);
    } while(slow !== fast);

    let tmp = 0;

    while(slow !== tmp){
        slow = nums[slow];
        tmp = nums[tmp];
    }

    return slow;
};

let nums = [1,2,3,1];
console.log(findDuplicate(nums));