/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
    const nums1Size = nums1.length;
    const nums2Size = nums2.length;

    if(nums1Size === 0)
    {
        return nums2Size % 2 !== 0 ? nums2[nums2Size/2 - 0.5] : (nums2[nums2Size/2 - 1] + nums2[nums2Size/2]) / 2;
    }
    if(nums2Size === 0)
    {
        return nums1Size % 2 !== 0 ? nums1[nums1Size/2 - 0.5] : (nums1[nums1Size/2 - 1] + nums1[nums1Size/2]) / 2;
    }
    if(nums1Size + nums2Size <= 2)
    {  	    
        if(nums1Size && nums2Size)
        {
            return (nums1[0] + nums2[0]) / 2;
        }
        else{
        	return nums1Size > 0 ? nums1[0]: nums2[0] ;
        }        
    }    

    let nums1max = nums1[nums1Size-1];
    let nums2max = nums2[nums2Size-1];
    nums1[0] > nums2[0] ? nums2.shift() : nums1.shift(); 
    nums1max > nums2max ? nums1.pop() : nums2.pop();              
        
    return findMedianSortedArrays(nums1,nums2);   
};

// https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2331883/js-simple-unique-solution-beats-99-step-by-step-explanation/'

// Using SOrt:
var findMedianSortedArrays2 = function(nums1, nums2) {
    
    let nums = nums1.concat(nums2);
    let length = nums.length;

    nums.sort((a, b) => { return a - b});
        
    if (length%2 === 1) {
         return nums[(length-1)/2];    
    }
    
    return (nums[length/2-1] + nums[length/2])/2;    
};