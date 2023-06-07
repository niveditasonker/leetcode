var preOrderTraversal = function(root) {
    let result = [];

    if (root===null) return result;

    let stack = [root];

    while(stack.length) {
        let curr = stack.pop();
        result.push(curr.val);

        if (curr.right) {
            stack.push(curr.right);
        }
        if (curr.left) {
            stack.push(curr.left);
        }

    }
    return result;
};