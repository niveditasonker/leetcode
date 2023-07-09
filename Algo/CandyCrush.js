/**
 * @param {number[][]} board
 * @return {number[][]}
 */
var candyCrush = function(board) {
    if(!board) return board;

    let done = true;

    // cols
    for (let r=0; r<board.length; r++){
        for (let c=0; c+2<board[0].length; c++){
            const candy1 = Math.abs(board[r][c]);
            const candy2 = Math.abs(board[r][c+1]);
            const candy3 = Math.abs(board[r][c+2]);

            if (candy1 && candy1 === candy2 && candy2 === candy3){
                board[r][c] = board[r][c+1] = board[r][c+2] = -candy1;
                done =false;
            }
        }
    }

    // rows
    for(let c=0; c<board[0].length; c++){
        for(let r=0; r+2<board.length; r++){
            const candy1 = Math.abs(board[r][c]);
            const candy2 = Math.abs(board[r+1][c]);
            const candy3 = Math.abs(board[r+2][c]);

            if (candy1 && candy1 === candy2 && candy2 === candy3){
                board[r][c] = board[r+1][c] = board[r+2][c] = -candy1;
                done = false;
            }    
        }
    }

    if (!done){
        for(let c=0; c<board[0].length; c++){
            let idx = board.length - 1;
            for (let r=board.length-1; r>=0; r--){
                if (board[r][c] > 0){
                    board[idx][c] = board[r][c];
                    idx--;
                }
            }

            while(idx >=0 ) {
                board[idx][c] = 0;
                idx--;
            }            
        }


    }

    return done ? board : candyCrush(board);
};