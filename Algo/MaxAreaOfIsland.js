var maxAreaOfIsland = function(grid) {
    let row = grid.length; 
    let col = grid[0].length; 
    let max = 0;

    function dfs(r,c) {
        // out of bounds check
        if (r < 0 || c < 0 || r > row-1 || c > col -1 || !grid[r][c]) return 0;

        // mark path so we don't visit same
        grid[r][c] = 0;

        return 1 +  dfs(r+1, c,) + dfs (r-1, c) +
        dfs(r, c+1) + dfs (r, c-1);
    }

    for (let i=0; i<row; i++) {
        for (let j=0; j< col; j++){
            if (grid[i][j]) {
                max = Math.max(max, dfs(i,j)) 
            };
        }
    }
    return max;
};

let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
console.log(maxAreaOfIsland(grid));