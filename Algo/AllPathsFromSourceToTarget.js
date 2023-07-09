/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let allPaths = [];

    const dfs = ((start, path) => {
        if (path[path.length-1] === graph.length-1){
            allPaths.push(path);
            return;
        }
        // console.log(allPaths);

        for (const p of graph[start]){
            // console.log(p, graph[start]);
                dfs(p, [...path, p]);
        }
    
    });
    dfs(0, [0]);

    return allPaths;
};

let graph = [[1,2],[3],[3],[]];
console.log(allPathsSourceTarget(graph));