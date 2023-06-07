function createNode(value, left = null, right = null) {
    return { value, left, right };
}

const tree = createNode(2,
    createNode(1),
        // createNode(3),
        // createNode(4)
    createNode(3),
        // createNode(4),
        // createNode(3)
)

var isValidBST = function(root) {
    // if (root === null) return true;
    let prev = -Infinity;
    let isValid = true;

    const inorderTraversal = (node) => {
        if (node.left) inorderTraversal(node.left);

        if (prev.val >= node.val) { 
            isValid =  false;
            return;

        }

        prev = node;

        if (node.right) inorderTraversal(node.right);
    }

    inorderTraversal(root);
    return isValid;
};

console.log("isValidBST: ", isValidBST(tree));


var isValidBSTRecursive = function(root, min = -Infinity, max = Infinity) {
    // console.log(root);
    if (!root) return true;
    if (root.value <= min || root.value >= max) return false;
    return isValidBSTRecursive(root.left, min, root.value) && isValidBSTRecursive(root.right, root.value, max);
}

// root = [2,1,3]
console.log("isValidBSTRecursive: ", isValidBSTRecursive(tree));