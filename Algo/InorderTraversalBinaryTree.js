var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let currNode = root;

    while(currNode || stack.length) {
        while(currNode){
            stack.push(currNode);
            currNode = currNode.left;
        }
        currNode = stack.pop();
        result.push(currNode.val);
        currNode = currNode.right;

    }
    return result;
};