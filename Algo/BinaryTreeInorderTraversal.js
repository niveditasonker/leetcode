//all Left nodes -> Root -> all Right nodes

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

const inorderTraversalRecursive = (root) => {
    let res = [];

    function processTree(node){
        if(!node) return;

        if (node.left){
            processTree(node.left);
        }
        res.push(node.val);
        if (node.right){
            processTree(node.right);
        }
    }

    processTree(root);

    return res;

}