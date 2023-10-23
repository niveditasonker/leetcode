/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    if(!rooms || rooms.length == 0) return;

    let m = rooms.length;
    let n = m && rooms[0].length;
    const GATE= 0, EMPTY = 2147483647;

    const dirs = [[0,1], [0,-1], [-1,0], [1,0]];

    const inbound = (rooms, r, c) => {
        return (r>=0 && c >= 0 && r < rooms.length && c < rooms[0].length);
    }    

    let queue = [];

    for (let row=0; row<m; row++){
        for (let col=0; col<n; col++){
            if(rooms[row][col] === GATE){
                queue.push([row, col])
            }
        }
    }

    while(queue.length){
        const [gateRow, gateCol] = queue.shift();

        for (let [dx, dy] of dirs){
            let r = gateRow + dx, c = gateCol + dy;

            if (!inbound(rooms, r,c) || rooms[r][c] !== EMPTY){
                continue;
            }

            rooms[r][c] = rooms[gateRow][gateCol] + 1;
            queue.push([r,c]);
        }
    }


};
// 2nd solution
/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const queue = []
    const INF = 2147483647
    const row = rooms.length
    const col = rooms[0].length
    const dirs = [[-1,0], [1, 0], [0, -1], [0, 1]]
    let dist = 0
    //get all gate as start point and push that to the queue
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(rooms[i][j] === 0) queue.push([i,j])
        }
    }

    //BFS traverse, if INF, or not -1, not 0, compare the distance and get the min
    while(queue.length > 0) {
        const size = queue.length
        //dist++, not necessary
        //for(let i=0; i < size; i++){
            const [curX, curY] = queue.shift()
            for(let [dx, dy] of dirs){
                const newX = curX+dx, newY = curY+dy
                if(newX >= 0 && newX < row && newY >= 0 && newY < col && rooms[newX][newY] === INF) {
                    // you don't need to compare this, due to the the nature of BFS --- layer by layer process
                    // the dist must be equal or larger if this is the second time visit
                    //rooms[newX][newY] = Math.min(rooms[newX][newY], dist)
                    rooms[newX][newY] = rooms[curX][curY]+1
                    queue.push([newX, newY])
                }
            }
        }
    }
;