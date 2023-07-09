/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let n1 = m-1;
    let n2 = n-1;
    let k = m+n-1;

    while(n2 >= 0){
        if (n1>= 0 && nums1[n1] > nums2[n2]){
            nums1[k] = nums1[n1];
            k--;
            n1--;
        } else {
            nums1[k] = nums2[n2];
            k--;
            n2--;
        }
    }
};
let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n));