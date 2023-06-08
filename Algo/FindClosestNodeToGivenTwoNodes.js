var closestMeetingNode = function(edges, node1, node2) {
    let map1 = {};
    let map2 = {};
    let count = 0;

    while (map1[node1] == undefined && node1 != -1) {
        map1[node1] = count;
        count++;
        node1 = edges[node1];
    }
    count = 0;

    while (map2[node2] == undefined && node2 != -1) {
        map2[node2] = count;
        count++;
        node2 = edges[node2];
    }

    // console.log(map1);
    // console.log(map2);

    let max = Infinity;
    let res = -1;

    for (let i=0; i< edges.length; i++){
        if (map1[i] == undefined || map2[i] == undefined) continue;
        const currMax = Math.max(map1[i], map2[i]);

        if (currMax < max) {
            max = currMax;
            res = i;
        }
    }

    return res;
};

let edges = [1,2,-1], node1 = 0, node2 = 2;
console.log(closestMeetingNode(edges, node1, node2));