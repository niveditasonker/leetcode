var majorityElement = function(nums) {
    const times = Math.floor(nums.length/2);

    let numbers = {}
    for(let i = 0; i < nums.length; i++) {
        if(numbers[nums[i]]) {
            numbers[nums[i]]++
        } else {
            numbers[nums[i]] = 1
        }
    }
    for(let key in numbers) {
        if(numbers[key] > times) return key;
    }    

};

/*https://leetcode.com/problems/majority-element/solutions/2686685/typescript-solution-o-n-time-o-1-space-explanation/ */
function majorityElement2(nums) {
    let candidate;
    let count = 0;
    
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        console.log(count, candidate, num);
        count += (num === candidate) ? 1 : -1;
        console.log(count, candidate);
    }
    
    return candidate;
};

let nums = [3,2,3];
console.log(majorityElement(nums));
console.log(majorityElement2(nums));