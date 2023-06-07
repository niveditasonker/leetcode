var countSubTrees = function(n, edges, labels) {
    labels = labels.split('');
    let arr = new Array(n);

    for (let i=0; i<n;i++){
        arr[i] = new Array();
    }

    for (let edge of edges) {
        arr[edge[0]].push(edge[1]);
        arr[edge[1]].push(edge[0]);
    }
    // console.log(arr);

    let res = new Array(n);

    function dfs(curr, parent) {
        let map = {}
        for (let child of arr[curr]){
            // don't traverse up the tree
            if (child === parent) continue;

            let val = dfs(child, curr);

            // console.log("val: ", val);

            for (let [key, count] of Object.entries(val)){
                console.log(`key: ${key} count ${count}`);
                if (!map[key]) {
                    map[key] = 0;
                }
                map[key] += count;
            }
        }


        if (!map[labels[curr]]) {
            map[labels[curr]] = 0;
        }
        map[labels[curr]]++;

        res[curr] = map[labels[curr]];
        return map;
    }

    dfs(0);
    return res;
};

// var countSubTrees2 = function(n, edges, labels) {
//     labels = labels.split("")

//     let adj = new Array(n)
//     for (let i = 0; i < n; i++) {
//         adj[i] = new Array()
//     }
//     for (let edge of edges) {
//         adj[edge[0]].push(edge[1])
//         adj[edge[1]].push(edge[0])
//     }
//     // console.log(adj);

//     let res = new Array(n)
//     let dfs = function (node, parent) {
//         let map = {}
//         for (let neighbor of adj[node]) {
//             if (neighbor === parent) continue
//             let val = dfs(neighbor, node)
//             console.log("In 2, val: ", val);
//             for (let [label, count] of Object.entries(val)) {
//                 if (!map[label]) map[label] = 0
//                 map[label] += count
//             }
//         }

//         console.log("2....", map);
//         if (!map[labels[node]]) map[labels[node]] = 0
//         map[labels[node]]++
//         res[node] = map[labels[node]]
//         return map
//     }

//     dfs(0)
//     return res
// };

let n = 5, edges = [[0,1],[0,2],[1,3],[0,4]], labels = "aabab";
console.log(countSubTrees(n, edges, labels));
// console.log(countSubTrees2(n, edges, labels));