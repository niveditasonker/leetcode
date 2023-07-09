// using binary search
function countNegativesBS(grid) {
    const N = grid.length;
    const M = grid[0].length;

    let total = 0;
    
    const binarySearch = (arr) => {
        let left = 0;
        let right = arr.length - 1;
        let mid;
        
        while (left < right) {
            mid = Math.floor((left + right) / 2);
            
            if (arr[mid] >= 0) {
                left = mid + 1; // we not interested in this element anymore so we shift our "cursor" by one
            } else {
                right = mid; // vice versa: this element fits our needs so we must keep the current position
            }
        }
        
        return arr[left] < 0 ? M - left : 0;
    };
    
    for (let i = 0; i < grid.length; i++) {
	    // small optimization: if the current array is started of fitable element (number) then this array and all consequent will have only needed numbers so we can just calculate them simply.
        if (grid[i][0] < 0) {
            total += (N - i) * M;
            break;
        } else {
            total += binarySearch(grid[i]);
        }
    }
    
    return total;
};

//using regular loop
var countNegatives = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    let count = 0;

    for (let i=0; i<row; i++){
        for (let j=0; j<col; j++){
            if (grid[i][j] < 0) count++;
        }
    }

    return count;
};

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]];
console.log(countNegatives(grid));
console.log(countNegativesBS(grid));