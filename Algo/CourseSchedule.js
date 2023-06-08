var canFinish = function(numCourses, prerequisites) {
    // let res = false;
    let visited = {};
    let preMap = {};

    // create the adjacency list {2: [1], 3: [2]}
    for (let [c1, c2] of prerequisites) {
        if (preMap[c1]) {
            preMap[c1].push(c2);
        } else {
            preMap[c1] = [c2];
        }
    }
    // console.log(preMap);

    // dfs on keys 
    for (let key in preMap){
        if (!dfs(key)) return false;
    }

    function dfs(node){
        // console.log(node);
        if (visited[node]) return false;

        if(preMap[node]){
            // if the node exists in the preMap & it's length is 0 means
            // the prereq has been met
            // console.log(`node ${node} is present, length is ${preMap[node].length}`);
            if(preMap[node].length===0) return true;

            // mark it as checked
            visited[node] = true;

            for (let val of preMap[node]){
                // console.log(`val: ${val}`);
                // repeat the process for the value
                if (!dfs(val)) return false;
            }

            visited[node] = false;
            // nce we travel through all the children and see that there is no re-occurance
            // of the current node (a cycle) we can remove the current node from the visite
            preMap[node] = [];
        }
        return true;
    }

    console.log(preMap)
    return true;
};

let prerequisites = [[4,3], [3, 2], [2,1]],  numCourses = 2;
console.log(canFinish(numCourses, prerequisites));