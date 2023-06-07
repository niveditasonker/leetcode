const graph = {
    A: ['B', 'D'],
    B: ['A', 'C', 'E'],
    C: ['B'],
    D: ['A', 'E'],
    E: ['B', 'D', 'F'],
    F: ['E'],
};


function dfsGraph(graph, start) {
    // if (!graph) return [];
    let visited = new Set();
    let stack = [start];
    let result = [];

    while (stack.length > 0){
        let current = stack.pop();

        if (!visited.has(current)) {
            visited.add(current);
            result.push(current);

            for (let neightbors of graph[current]) {
                // console.log("====> neightbors: ", neightbors);

                stack.push(neightbors);
            }
        }
    }
    return result;
}

// function dfsGraph(graph, start) {
//     const stack = [start];
//     const visited = new Set();
//     const result = [];
  
//     while (stack.length) {
//       const vertex = stack.pop();
  
//       if (!visited.has(vertex)) {
//         visited.add(vertex);
//         result.push(vertex);
  
//         for (const neighbor of graph[vertex]) {
//           stack.push(neighbor);
//         }
//       }
//     }
  
//     return result;
//   }
  

console.log(dfsGraph(graph, 'A'));