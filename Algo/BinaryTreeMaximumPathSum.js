function TreeLinkNode(val) {
	this.val = val;
  this.left = this.right = this.next = null;
}

let n1 = new TreeLinkNode(-10);
let n2 = new TreeLinkNode(9);
let n3 = new TreeLinkNode(20);
let n4 = new TreeLinkNode(null);
let n5 = new TreeLinkNode(null);
let n6 = new TreeLinkNode(15);
let n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

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
var maxPathSum = function(root) {
    let max = -Infinity;

    function findMax(node) {
        if(!node) return 0;

        const left = findMax(node.left);
        const right = findMax(node.right);
        const totalSum = left + right + node.val;

        const leftSum = left + node.val;
        const rightSum = right + node.val;

        max = Math.max(leftSum, rightSum, node.val, totalSum, max);

        // The most important part is what do we return for this recursive function?
        // The answer is we are returning The Max Path from this node
        return Math.max(leftSum, rightSum, node.val);
    }

    findMax(root);

    return max;
};

var maxPathSum2 = function(root) {
    var max = -Number.MAX_VALUE;
    getMaxSum(root);
    return max;
    function getMaxSum(node) {
      if (!node) return 0;
      var leftSum = getMaxSum(node.left);
      var rightSum = getMaxSum(node.right);
      max = Math.max(max, node.val + leftSum + rightSum);
      return Math.max(0, node.val + leftSum, node.val + rightSum);
    }
  };

console.log(maxPathSum(n1));