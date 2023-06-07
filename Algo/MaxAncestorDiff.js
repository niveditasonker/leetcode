function createNode(val, left = null, right = null) {
    return { val, left, right };
}
// [8,3,10,1,6,null,14,null,null,4,7,13]

const tree = createNode(8,
    createNode(3,
        createNode(1),
        createNode(6,
            createNode(4),
            createNode(7))
    ),
    createNode(10,
        createNode(null),
        createNode(14,
            createNode(13))
    )
)

// console.log(tree);

var maxAncestorDiff = function(root) {
    if (root == null) return 0;
    let result = 0;
    helper(root, root.val, root.val);

    function helper(node, max, min) {
        if (node === null) {
            // console.log(`Node is null node: ${node}, max: ${max}, min: ${min}, result: ${result}`);
            result = Math.max(result, (max-min));
            return;
        }
        // console.log(`Before calcs node: ${node}, max: ${max}, min: ${min}`);

        max = Math.max(max, node.val);
        min = Math.min(min, node.val);

        // console.log(`After calcs node: ${node}, max: ${max}, min: ${min}`);

        helper(node.left, max, min);
        helper(node.right, max, min);
    }

    return result;
};

console.log(maxAncestorDiff(tree));