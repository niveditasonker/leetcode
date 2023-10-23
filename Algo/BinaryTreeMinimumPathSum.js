function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

let n1 = new TreeLinkNode(10);
let n2 = new TreeLinkNode(9);
let n3 = new TreeLinkNode(20);
let n4 = new TreeLinkNode(3);
let n5 = new TreeLinkNode(12);
let n6 = new TreeLinkNode(15);
let n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

var minPathSum = function(root) {
    let min = Infinity;

    if (!root) return 0;

    function findMin(node) {
        if(!node) return 0;
        const left = findMin(node.left);
        const right = findMin(node.right);

        const totalSum = left + right + node.val;

        const leftSum = node.val + left;
        const rightSum = node.val + right;

        min = Math.min(node.val, leftSum, rightSum,totalSum,  min);

        return Math.min(leftSum, rightSum, node.val);
    }

    findMin(root);

    return min;
}

console.log(minPathSum(n1));