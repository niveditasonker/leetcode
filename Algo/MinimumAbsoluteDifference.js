var getMinimumDifference = function(root) {
    let prev = -Infinity;
    let min = Infinity;

    const inorder = (node) => {
        if(node){
            inorder(node.left);
            min = Math.min(min, node.val-prev);
            prev = node.val;
            inorder(node.right);
        }
        return;
    }

    inorder(root);
    return min;
};

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
 * @return {number}
 */
var getMinimumDifference2 = function(root) {
    let arr = [];
    function inOrder(node){
        if(node){
            inOrder(node.left);
            arr.push(node.val);
            inOrder(node.right);
        }
    }
    // inOrder will increasing order in BST
    inOrder(root);

    // because of increasing order we find minimum difference by travelling linearly once
    let minDiff = arr[1]-arr[0];
    for(let i=2; i<arr.length; i++){
        minDiff = Math.min(minDiff, arr[i]-arr[i-1]);
    }
    return minDiff;
};