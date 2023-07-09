var minKnightMoves = function(targetX, targetY) {
    let minMoves = 0;
    let directions = [[1,2], [2,1], [1, -2], [-2, -1], [-1, -2], [2, -1], [-1,2], [-2,1]];
    let queue = [[0, 0]];
    let set = new Set();

    while(queue.length){
        const len = queue.length;

        for (let i=0; i<len; i++){
            let [x,y] = queue.shift();

            if (x == targetX && y == targetY){
                return minMoves;
            }

            for (let [dx, dy] of directions){
                let [neighborX, neighborY] = [x+dx, y+dy];

                if (!set.has(neighborX + ',' + neighborY)){
                    queue.push([neighborX, neighborY]);
                    set.add(neighborX + ',' + neighborY);
                }
            }
        }
        minMoves++;
    }

    return minMoves;
};

let targetX = 2, targetY = 1;
console.log(minKnightMoves(targetX, targetY));

let x = 5, y = 5;
console.log(minKnightMoves(x, y));