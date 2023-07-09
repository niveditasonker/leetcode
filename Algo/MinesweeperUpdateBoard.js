/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    if (!board) return board;

    let [x, y] = click;

    if (board[x][y] === 'M') {
        board[x][y] = 'X';
    } else {
        numMines = checkMines(x, y, board);

        if (numMines > 0){
            board[x][y] = numMines.toString();
        } else {
            board[x][y] = 'B';
            for(let i= x-1; i<=x+1; i++){
                for (let j=y-1; j <=y+1; j++) {
                    if (i>=0 && i<board.length && j>=0 && j <board[i].length && board[i][j] != 'B'){
                        updateBoard(board, [i, j]);
                    }
                }
            }
        }
    }

    return board;
};

function checkMines(x,y, board){
    let mines = 0;

    for (let i=x-1; i<= x+1; i++){
        for (let j=y-1; j<= y+1; j++){
            if (i>=0 && i<board.length && j>=0 && j <board[i].length && board[i][j]== 'M'){
                mines += 1;
            }
        }
    }
    return mines;
}

let  board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0];
console.log(updateBoard(board, click));
// Another solution: https://leetcode.com/problems/minesweeper/solutions/613233/javascript-dfs-solution-faster-than-97-10/