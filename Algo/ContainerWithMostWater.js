var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = -Infinity;

    while (left <= right){
        let area = 0;
        if (height[left] <= height[right]){
            area = height[left]*(right-left); // right-left == width;
            left++;
        } else{
            area = height[right]*(right-left); // right-left == width;
            right--;
        }
        max = Math.max(max, area);
    }
    return max;
};

let  height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));