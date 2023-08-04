var findItinerary = function(tickets) {
    tickets.sort();

    const graph = buildGraph(tickets);

    const dfs = (tickets, graph, startCity = 'JFK', res = ['JFK']) => {
        if (res.length === tickets.length + 1){
            return true;
        }

        const queue = graph.get(startCity) || [];

        if (queue.length === 0){
            return false;
        }

        for (const next of queue.slice()){
            res.push(next);
            queue.shift();

            if (dfs(tickets, graph, next, res)){
                return res;
            }

            res.pop();
            queue.push(next);
        }

        return false;
    }

    return dfs(tickets, graph);
};

const buildGraph = (tickets, map = new Map()) => {
    for (const [src, dest] of tickets){
        const edges = map.get(src) || [];

        edges.push(dest);
        map.set(src, edges);
    }

    return map;
}

let tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]];
console.log(findItinerary(tickets));

tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]];
console.log(findItinerary(tickets));