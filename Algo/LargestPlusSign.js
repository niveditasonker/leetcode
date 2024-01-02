var orderOfLargestPlusSign = function(n, mines) {
    let maxPluses = 0;

    let grid = Array.from({length: n},() => Array(n).fill(1));

    for (const [x,y] of mines){
        grid[x][y] = 0;
    }

    const left = Array.from({length:n}, () => Array(n).fill(0));
    const right = Array.from({length:n}, () => Array(n).fill(0));
    const up = Array.from({length:n}, () => Array(n).fill(0));
    const down = Array.from({length:n}, () => Array(n).fill(0));


    // calculate plus sign for left & up
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            if (grid[i][j] === 1){
                left[i][j] = (j>0) ? left[i][j-1] + 1 : 1;
                up[i][j] = (i>0) ? up[i-1][j] + 1 : 1;
            }
        }
    }

    // calculate plus sign for right & down
    for (let i=n-1; i>=0; i--){
        for (let j=n-1; j>=0; j--){
            if (grid[i][j] === 1){
                right[i][j] = (j<n-1) ? right[i][j+1] + 1 : 1;
                down[i][j] = (i<n-1) ? down[i+1][j] + 1 : 1;
            }
        }
    }   
    
    // console.log(left);
    // console.log(right);
    // console.log(up);
    // console.log(down);

    for(let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            if (grid[i][j] === 1){
                const count = Math.min(left[i][j], right[i][j], up[i][j], down[i][j]);
                maxPluses = Math.max(count, maxPluses);
            }
        }
    }
    return maxPluses;
};

let n = 5, mines = [[4,2]];
console.log(orderOfLargestPlusSign(n,mines));