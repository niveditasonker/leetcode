
// O(N) complexity, space O(1)
var trap = function(height) {
    let left = 0, right = height.length - 1;
    let maxLeft = 0, maxRight = 0;
    let waterTrapped = 0;

    while (left <= right){
        if (height[left] < height[right]){
            if (height[left] > maxLeft){
                maxLeft = height[left];
            } else {
                waterTrapped += maxLeft - height[left];
            }
            left++;
        } else {
            if (height[right] > maxRight){
                maxRight = height[right];
            } else {
                waterTrapped += maxRight - height[right];
            }
            right--;
        }
    }

    return waterTrapped;
};

// O(N) time, O(N) space

/**
 * @param {number[]} height
 * @return {number}
 */
var trap2 = function(height) {

    let left = [];
    let right = [];
    let n = height.length;

    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i = 1; i<n; i++){
        left[i] = Math.max(left[i-1], height[i]);
    }
    
    for(let i = n - 2; i>=0; i--){
        right[i] = Math.max(right[i+1], height[i]);
    }
    
    let ans = 0;
    for(let i = 0; i<n; i++){
        ans+=(Math.min(left[i], right[i])) - height[i];
    }

    return ans;

};




let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));
console.log(trap2(height));

height = [4,2,0,3,2,5];
console.log(trap(height));
console.log(trap2(height));