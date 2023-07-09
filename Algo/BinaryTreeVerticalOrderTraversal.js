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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if (!root) return [];

    let q = [[root, 0]];
    let res = [];
    let min = 1;

    while(q.length){
        let [node, col] = q.shift();

        if (node.left){
            q.push([node.left, col-1]);
        }

        if (node.right){
            q.push([node.right, col+1]);
        }

        // if the column is less than the min so far, add it to the front of the result
        if (col < min){
            res.unshift([node.val]);
            min = col;
        } else if (col-min > res.length-1){
            // if the column is greater than the max so far, add it to the back of the result
            res.push([node.val]);
        } else {
            // otherwise add the value to the list already at that column
            res[col-min].push(node.val);
        }
    }

    return res;
};

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

console.log(verticalOrder(n1));