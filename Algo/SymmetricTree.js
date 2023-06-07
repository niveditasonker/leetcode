function createNode(value, left = null, right = null) {
    return { value, left, right };
}

const tree = createNode(1,
    createNode(2,
        createNode(3),
        createNode(4)
    ),
    createNode(2,
        createNode(4),
        createNode(3)
    )
)

//iterative
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null) return true;

    let stack = [];
    stack.push([root.left, root.right]);

    while(stack.length) {
        let [nodeA, nodeB] = stack.pop();

        if (nodeA == null && nodeB == null) continue;

        if (nodeA == null || nodeB == null) return false;

        if (nodeA.val === nodeB.val) {
            stack.push([nodeA.left, nodeB.right]);
            stack.push([nodeA.right, nodeB.left]);
        } else {
            return false;
        }
    }

    return true;    
};

console.log(isSymmetric(tree));

let isSymmetricRecursive = function(root) {
    return isMirror(root.left, root.right);
}

const isMirror = (nodeA, nodeB) => {
    if (nodeA === null && nodeB === null) return true;

    if (nodeA === null || nodeB === null) return false;

    if (nodeA.val === nodeB.val) {
        return (isMirror(nodeA.left, nodeB.right) && isMirror(nodeA.right, nodeB.left));
    } else {
        return false;
    }
}

console.log(isSymmetricRecursive(tree));