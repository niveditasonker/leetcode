/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.board = matrix;
};

/** 
 * @param {number} row 
 * @param {number} col 
 * @param {number} val
 * @return {void}
 */
NumMatrix.prototype.update = function(row, col, val) {
    this.board[row][col] = val;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;

    for (let i=row1; i<= row2; i++){
        for (let j=col1; j<= col2; j++){
            sum += this.board[i][j];
        }
    }

    return sum;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * obj.update(row,col,val)
 * var param_2 = obj.sumRegion(row1,col1,row2,col2)
 */


// Optimized version:
class NumMatrix {
    constructor(matrix) {
        this.matrix = matrix 
        
        for (let row = 0; row < this.matrix.length; row++) {
            for (let col = 1; col < this.matrix[0].length; col++) {
                this.matrix[row][col] += this.matrix[row][col - 1]
            }
        }
    }

    update (row, col, val) {
        
        let original = this.matrix[row][col]
        
        if (col !== 0) {
            original -= this.matrix[row][col - 1] 
        }
        
        let diff = original - val 
        
        for (let i = col; i < this.matrix[0].length; i++) {
            this.matrix[row][i] -= diff
        }
        
    }

    sumRegion(row1, col1, row2, col2) {
        let sum = 0
        
        for (let i = row1; i < row2 + 1; i++) {
            sum += this.matrix[i][col2]
        
            if (col1 !== 0) {
                sum -= this.matrix[i][col1 - 1]
            }
        }
        return sum
    }
}