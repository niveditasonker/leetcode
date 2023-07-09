/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let dummyRow = new Array(matrix.length).fill(-1);
    let dummyCol = new Array(matrix[0].length).fill(-1);

    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[0].length; j++){
            if (matrix[i][j] == 0){
                dummyRow[i] = 0;
                dummyCol[j] = 0;
            }
        }
    }

    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[0].length; j++){
            if (dummyRow[i] == 0 || dummyCol[j] == 0){
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};


var setZeroes2 = function(matrix) {
    let indexes = []
    for(let i=0;i<matrix.length;i++) {
        for(let j=0;j<matrix[i].length;j++) {
            if(matrix[i][j]==0) {
                indexes.push([i,j])
            }
        }
    }
    
    for(let [r,c] of indexes) {
        dfs(matrix,r,c)
    }
    return matrix
};

const dfs = (mat,r,c) => {
    mat[r].fill(0);
    
    for(let i=0;i<mat.length;i++) {
        mat[i][c] = 0
    }
}

let matrix = [[1,1,1],[1,0,1],[1,1,1]];
console.log(setZeroes(matrix));
matrix = [[1,1,1],[1,0,1],[1,1,1]];
console.log(setZeroes2(matrix));