/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {

    let output = [];
    let startRow = 0, endRow = matrix.length;
    let startCol = 0, endCol = matrix[0].length;

    while (startRow < endRow && startCol < endCol) {
        // left to right
        for (let i=startCol; i<endCol; ++i){
            output.push(matrix[startRow][i]);
        }

        startRow++;

        // right to down
        for (let i=startRow;i<endRow; i++) {
            output.push(matrix[i][endCol-1]);
        }
        endCol--;

        if (!(startCol < endCol && startRow < endRow)){
            break;
        }        

        //right to left
        for (let i=endCol-1; i>=startCol; i--) {
            output.push(matrix[endRow-1][i]);
        }
        endRow--;
        

        //down to top

        for (let i=endRow-1; i>= startRow; i--) {
            output.push(matrix[i][startCol]);
        }
        startCol++;
    }
    return output;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
// console.log(spiralOrder(matrix));

// matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
// console.log(spiralOrder(matrix));

matrix = [[7],[9],[6]];
console.log(spiralOrder(matrix));