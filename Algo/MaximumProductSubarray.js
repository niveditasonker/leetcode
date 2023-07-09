var maxProduct = function(nums) {
    if (nums.length == 0) return -1;

    let max = min = product = nums[0];

    for (let i=1; i<nums.length; i++){
        const [minProduct, maxProduct] = [(min*nums[i]), (max * nums[i])];

        max = Math.max(minProduct, maxProduct, nums[i]);
        min = Math.min(minProduct, maxProduct, nums[i]);

        product = Math.max(product, max);
    }

    return product;
};

let nums = [2,3,-2,4];
console.log(maxProduct(nums));

nums = [-2,0,-1];
console.log(maxProduct(nums));
nums =
[-2,3,-4];
console.log(maxProduct(nums));