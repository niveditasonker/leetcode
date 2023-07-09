const findCorrespondingNode = (rootA, rootB, target) => {
    // your code here
    if (rootA === target) return rootB;

    for (let i=0; i< rootA.children.length; i++){
        const foundNode = findCorrespondingNode(rootA.children[i], rootB.children[i], target);
        if (foundNode) return foundNode;
    }
    return null;
}

console.log(findCorrespondingNode(A, B, A));

// using DFS;
const findCorrespondingNodeDFS = (rootA, rootB, target) => {
    let stack = [];
    stack.push([rootA, rootB]);

    while (stack.length) {
        const [nodeA, nodeB] = stack.pop();
        if (nodeA===target) return nodeB;
        for (let i=nodeA.children.length-1; i>=0; i--) {
            stack.push([nodeA.children[i], nodeB.children[i]]);
        }
    }
    return null;
}

console.log(findCorrespondingNode());

// using BFS
const findCorrespondingNodeBFS = (rootA, rootB, target) => {
const stack = [[rootA, rootB]];
while(stack.length > 0) {
    const [leftNode, rightNode] = stack.pop();
    if (leftNode === target) return rightNode;
    for (let i = 0; i < leftNode.children.length; i++) {
    stack.push([leftNode.children[i], rightNode.children[i]]);
    }
}
}