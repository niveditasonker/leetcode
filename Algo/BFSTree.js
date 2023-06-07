function createNode(value, left = null, right = null) {
    return { value, left, right };
}

const tree = createNode(1,
    createNode(2,
        createNode(4),
        createNode(5)
    ),
    createNode(3,
        createNode(6),
        createNode(7)
    )
)

function BFSTree(root) {
    if (!root) return [];
    let queue = [root];
    let result = [];

    while (queue.length) {
        const currNode = queue.shift();
        result.push(currNode.value);

        if (currNode.right) {
            queue.push(currNode.right);
        }

        if (currNode.left) {
            queue.push(currNode.left);
        }
    }

    return result;
}

console.log(BFSTree(tree));