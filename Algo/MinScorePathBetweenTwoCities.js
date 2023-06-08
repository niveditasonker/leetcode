var minScore = function(n, roads) {
    let graph = new Array(n+1).fill().map(()=>[]);
    for (let [r1, r2, dist] of roads) {
        graph[r1].push([r2, dist]);
        graph[r2].push([r1, dist]);
    }

    let visited = new Set();
    const queue = [1];
    let minimunScore = Infinity;

    while (queue.length) {
        const node = queue.shift();

        for (let [next, dist] of graph[node]) {
            minimunScore = Math.min(minimunScore, dist);
            if (visited.has(next)) continue;

            visited.add(next);
            queue.push(next);
        }
    }

    return minimunScore;
};


let n = 4, roads = [[1,2,9],[2,3,6],[2,4,5],[1,4,7]];
console.log(minScore(n, roads));