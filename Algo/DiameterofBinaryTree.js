var diameterOfBinaryTree = function(root) {
    let diameter = 0;

    if (root === null) return diameter;

    function dfs(node) {
        if (!node) return 0;

        let left = dfs(node.left);

        let right = dfs(node.right);
         

        // update diameter at every node
        diameter = Math.max(diameter, (left+right));

        // update the largest number of edge so far
        return 1 + Math.max(left, right);
    }

    dfs(root);
    return diameter;    
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
console.log(diameterOfBinaryTree(tree));