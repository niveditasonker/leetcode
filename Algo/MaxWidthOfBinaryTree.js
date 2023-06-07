var widthOfBinaryTree = function(root) {
    let maxWidth = 0;
    let queue = [[root, 0]] // node, idx

    if (!root) return 0;

    while (queue.length) {
        const size = queue.length;
        let first = queue[0][1];
        let last = queue[size-1][1];

        for (let i=0; i<size; i++) {
            const [node, idx] = queue.shift();
            const normalizeIdx = idx - first // to avoid overflow integer

            if (node.left) {
                queue.push([node.left, normalizeIdx*2+1]); //find next left idx & node
            }

            if (node.right) {
                queue.push([node.right, normalizeIdx*2+2]); // find next right idx & node
            }
        }

        const width = last - first + 1; // add 1 since 0 based idx
        maxWidth = Math.max(maxWidth, width);
    }

    return maxWidth;    
};

function createNode(val, left = null, right = null) {
    return { val, left, right };
}
// [8,3,10,1,6,null,14,null,null,4,7,13]

const tree = createNode(1,
    createNode(3,
        createNode(5),
        createNode(3),
    ),

    createNode(2,
        createNode(null),
        createNode(9),
    )
)
console.log(widthOfBinaryTree(tree));