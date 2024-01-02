var pacificAtlantic = function(heights) {
    let res = [];

    let HEIGHT = heights.length;
    let WIDTH = heights[0].length;

    let pacific = new Set();
    let atlantic = new Set();

    // Depth first search from (x, y) in the direction of increasing height.
    // Marks reachable nodes in the passed in set.
    const dfs = (x,y,prevHeight, set) => {
        if (x<0 || y<0 || x>=WIDTH || y>= HEIGHT){
            return;
        }

        let currHeight = heights[y][x];

        if (currHeight < prevHeight) return;

        let idx = x + y * WIDTH;

        if (set.has(idx)) return;

        set.add(idx);

        dfs(x+1, y, currHeight, set);
        dfs(x-1, y, currHeight, set);
        dfs(x, y+1, currHeight, set);
        dfs(x, y-1, currHeight, set);
    }

    // pacific coast top row
    for (let i=0; i<WIDTH; i++){
        dfs(i,0,0,pacific);
    }

    // pacific coast let col
    for (let i=0; i<HEIGHT; i++){
        dfs(0,i,0,pacific);
    }
    
    // atlantic coast bottom row
    for (let i=0; i<WIDTH; i++){
        dfs(i, HEIGHT-1, 0, atlantic);
    }

    for (let i=0; i<HEIGHT; i++){
        dfs(WIDTH-1, i, 0, atlantic);
    }


    for (const index of pacific){
        if(atlantic.has(index)){
            const currX = index%WIDTH;
            const currY = Math.floor(index/WIDTH);

            res.push([currY,currX]);
        }
    }

    return res;
};

let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
console.log(pacificAtlantic(heights));

/*

*/