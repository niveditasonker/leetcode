/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    for (let r=0; r<board.length; r++){
        for (let c=0; c<board[r].length; c++){
            if (board[r][c] == 'O' && isBorder(r,c)){
                checkAdjacent(r,c);
            }
        }
    }

    for (let r=0; r<board.length; r++){
        for (let c=0; c<board[r].length; c++){
            if (board[r][c] == 'visited'){
                board[r][c] = 'O';
            } else {
                board[r][c] = 'X';
            }
        }
    }

    function isBorder(row, col){
        return (row === 0 || col === 0 || row === board.length-1 || col === board[row].length-1);
    }

    function checkAdjacent(r, c){
        if (r<0 || c < 0 || r>= board.length || c >= board[r].length || board[r][c] !== 'O') {
             return;
        }

        board[r][c] = 'visited';

        checkAdjacent(r,c+1);
        checkAdjacent(r,c-1);
        checkAdjacent(r+1,c);
        checkAdjacent(r-1,c);
    }

    return board;
};

let  board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
console.log(solve(board));