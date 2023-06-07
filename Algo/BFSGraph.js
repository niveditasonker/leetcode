const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
};

function BFSGraph(graph, start) {
    let queue = [start];
    let visited = new Set();
    let result = [];

    while (queue.length) {
        const curr = queue.shift();

        if (!visited.has(curr)) {
            result.push(curr);
            visited.add(curr);

            for (let neighbor of graph[curr]) {
                queue.push(neighbor);
            }
        }
    }
    return result;
}

console.log(BFSGraph(graph, 'A'));