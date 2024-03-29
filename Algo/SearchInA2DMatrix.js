var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    
    let left = 0; let right = m*n-1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);
        let midVal = matrix[Math.floor(mid/n)][mid%n];

        if (midVal === target) return true;
        else if (midVal > target){
            left = mid + 1;
        } else {
            right  = mid-1;
        }
    }

    return false;
};

https://leetcode.com/problems/search-a-2d-matrix/solutions/3874071/100-binary-search-video-simple-solution/

// O(log(m×n))

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;