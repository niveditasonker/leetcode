var minTime = function(n, edges, hasApple) {
    let children = [];
    for(let i=0; i< n; i++) {
        children[i] = new Array();
    }

    // console.log(children);

    for (let edge of edges) {
        // console.log(edge);
        children[edge[0]].push(edge[1]);
        children[edge[1]].push(edge[0]);
        // console.log(children);
    }

    console.log(children);

    function dfs(curr, prev) {
        let totalTime = 0;

        for (const node of children[curr]) {
            console.log(`node ${node}, prev ${prev}, curr ${curr}`);
            if (node !== prev) {
                let res = dfs(node, curr);
                if(res > 0 || hasApple[node]){
                    totalTime += res + 2
                }
            }
        }
        return totalTime;
    }

    return dfs(0, -1);
};

let n = 7, edges = [[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]], hasApple = [false,false,true,false,true,true,false];
console.log(minTime(n, edges, hasApple));