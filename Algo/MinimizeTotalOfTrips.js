/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function (n, edges, price, trips) {
    const m = new Map()
    const addToMap = (a, b) => {
        if (m.has(a)) {
            m.get(a).push(b)
        } else {
            m.set(a, [b])
        }
    }

    for (const [a, b] of edges) {
        addToMap(a, b)
        addToMap(b, a)
    }

    const nodeVisits = Array(n).fill(0)
    const dfs = (node, prev, finish, seen) => {
        if (node == finish) {
            for (const s of seen) {
                nodeVisits[s] += 1
            }
        }

        const neighbours = m.get(node)
        if (neighbours && neighbours.length > 0) {
            for (const ngh of neighbours) {
                if (ngh !== prev) {
                    seen.push(ngh)
                    dfs(ngh, node, finish, seen)
                    seen.pop()
                }
            }
        }
    }

    for (const [start, end] of trips) {
        dfs(start, -1, end, [start])
    }

    const cache = new Map()
    const dfs2 = (node, prev, isHalfed) => {
        const str = `${node}-${isHalfed}`
        if (cache.has(str)) {
            return cache.get(str)
        }
        const cur = isHalfed ? (price[node] * nodeVisits[node] / 2) : price[node] * nodeVisits[node]

        const neighbours = m.get(node)
        let rest = 0
        if (neighbours && neighbours.length > 0) {
            for (const ngh of neighbours) {
                if (ngh !== prev) {
                    if (isHalfed) {
                        rest += dfs2(ngh, node, false)
                    } else {
                        rest += Math.min(dfs2(ngh, node, true), dfs2(ngh, node, false))
                    }
                }
            }
        }
        cache.set(str, cur + rest)
        return cur + rest
    }


    const minTotal = Math.min(dfs2(0, -1, true), dfs2(0, -1, false))

    return minTotal
};

/*
Since it's a tree, there is only one path between each pair of nodes.

For each trip, use BFS to find the path from the start node to the end node.
Keep track of totalPrice, where totalPrice[i] = the total price from node i across all trips.

Use DFS with memoization to find the minimum score from taking half price on non-alternate nodes.
Memoize each dfs(node, parentIsHalfPrice, parent).
If the parent is half price, then this node cannot be half price.
If the parent is not half price, we have two choices: either take half price or don't take half price.
Return the minimum price.

n = number of nodes, m = number of trips
Time Complexity: O(m * n^2 + n^2)
Space Complexity: O(n)
*/

var minimumTotalPrice = function(n, edges, price, trips) {
    let graph = Array(n).fill(0).map(() => []);
    for (let [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
    }
    let totalPrice = Array(n).fill(0);
    for (let [start, end] of trips) {
      let path = makeTrip(start, end);
      for (let node of path) {
        totalPrice[node] += price[node];
      }
    }
    let memo = new Map();
    return dfs(0, false, -1);
    
    function dfs(node, parentIsHalfPrice, parent) { // dfs with memoization to find the lowest price  
      let key = `${node},${parentIsHalfPrice},${parent}`;
      if (memo.has(key)) return memo.get(key);
  
      if (parentIsHalfPrice) {
        let ans = totalPrice[node];
        for (let nei of graph[node]) {
          if (nei === parent) continue;
          ans += dfs(nei, false, node);
        }
        memo.set(key, ans);
        return ans;
      }
      
      let takeHalfPrice = totalPrice[node] / 2, noHalfPrice = totalPrice[node];
      for (let nei of graph[node]) {
        if (nei === parent) continue;
        takeHalfPrice += dfs(nei, true, node);
        noHalfPrice += dfs(nei, false, node);
      }
      let ans = Math.min(takeHalfPrice, noHalfPrice);
      memo.set(key, ans);
      return ans;
    }
    
    function makeTrip(start, end) { // bfs to find the path from start to end
      let queue = [[start, [start]]], seen = Array(n).fill(0);
      seen[start] = 1;
      while (queue.length) {
        let [node, path] = queue.shift();
        if (node === end) return path;
        for (let nei of graph[node]) {
          if (seen[nei]) continue;
          seen[nei] = 1;
          queue.push([nei, [...path, nei]]);
        }
      }
    }
};