var postOrderTraversal = function(root) {
    let result = [];

    if (root===null) return result;

    let stack = [root];

    while(stack.length) {
        let curr = stack[stack.length-1];

        if (curr.left){
            stack.push(curr.left);
            curr.left = null;
        } else if(curr.right){
            stack.push(curr.right);
            curr.right = null;
        } else {
            result.push(stack.pop().val);
        }
    }
    return result;
};

let postOrderTraversalRecursive = function(root) {
    let res = [];
    
    traverse(root);
    return res;

    function traverse(node) {
        if (!node) return;

        traverse(node.left);
        traverse(node.right);
        res.push(node.val);
    }
}