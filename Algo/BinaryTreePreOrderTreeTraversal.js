
// Root -> Left -> Right
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

function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

let n1 = new TreeLinkNode(3);
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

// root = [3,9,20,null,null,15,7]

console.log(preOrderTraversal(n1));