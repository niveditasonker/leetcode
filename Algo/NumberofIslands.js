var numIslands = function(grid) {
    
    let countOfIslands = 0;
    let row = grid.length;
    let col = grid[0].length;

    if (grid==null || grid.length==0||grid[0].length==0) return 0;

    // traverse the matrix
    for (let i=0; i<row; i++) {
        for (let j=0; j<col; j++) {
            if (grid[i][j] === '1') {
                countOfIslands++;
                checkAdjacent(grid, i, j);
            }
        }
    }

    return countOfIslands;
};

var checkAdjacent =function(matrix, r, c) {
    if(r < 0 || r >= matrix.length || c < 0 || c >= matrix[0].length || matrix[r][c] !== '1' ) return;

    matrix[r][c] = 'X';

    checkAdjacent(matrix, r-1, c);
    checkAdjacent(matrix, r+1, c);
    checkAdjacent(matrix, r, c+1);
    checkAdjacent(matrix, r, c-1);
}


let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

console.log(numIslands(grid));

grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log(numIslands(grid));