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

var hasPathSum = function(root, targetSum) {
    let res = false;

    function helperLoop(node, target) {
        if (node?.val || node?.val===0) {
            node.val += target;
        }

        if (!node?.left && !node?.right && node?.val === targetSum) {
            res = true;
        }

        if (node?.left) helperLoop(node.left, node.val);

        if (node?.right) helperLoop(node.right, node.val);
    }
    helperLoop(root, 0);

    return res;    
};

const hasPathSumRecursive = (root, targetSum) => {
	if (!root) return false;

	let output = false;
	const traverse = (root, sum = 0) => {
		// if targetSum exist at end of path, set output to TRUE
		if (!root.left && !root.right) {
			if (targetSum === sum + root.val) output = true;
		}

		// traverse left/right and keep adding value of nodes in current path
		if (root.left) traverse(root.left, sum + root.val);
		if (root.right) traverse(root.right, sum + root.val);
	};

	traverse(root);
	return output;
};

console.log(hasPathSum(tree));
console.log(hasPathSumRecursive(tree));