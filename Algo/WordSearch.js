var exist = function(board, word) {
    let row = board.length; 
    let col = board[0].length; 
    // let res = false;

    function dfs(r, c, idx) {
        // found word
        if (idx === word.length) return true;
        
        // out of bounds check
        if (r < 0 || c < 0 || r > row-1 || c > col -1) return false;

        // wrong character
        if (board[r][c] !== word[idx]) return false;

        // mark path so we don't visit same
        board[r][c] = 'X';

        const res =  (dfs(r+1, c, idx+1) || dfs (r-1, c, idx+1) ||
        dfs(r, c+1, idx+1) || dfs (r, c-1, idx+1));

        // reset out board
        board[r][c] = word[idx];
        return res;

    }

    for (let i=0; i<row; i++) {
        for (let j=0; j< col; j++){
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";

console.log(exist(board, word));