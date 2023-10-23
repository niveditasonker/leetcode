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


var sumNumbers = function(root) {
    let sum = 0;

    const traverse = (node, num) => {
        num += node.val;

        if(!node.left && !node.right){
            sum += Number(num);
        }

        if(node.left) {
             traverse(node.left, num);
        }

        if(node.right) {
            traverse(node.right, num);
       }
    }

    traverse(root, '');
    return sum;
};

console.log(sumNumbers(n1));

var sumNumbers2 = function (root) {
    // Declare a total
    let total = 0;

    // DFS with node and sum
    let dfs = (node, sum) => {
        // If the node is a leaf, "shift", add, and sum to total
        if (!node.left && !node.right) total += sum * 10 + node.val;
        else { // If not a leaf...
            // ...and has a left child,
            // DFS on the left side after "shifting" by one place
            if (node.left) dfs(node.left, sum * 10 + node.val);
            // ...and has a right child,
            // DFS on the right side after "shifting" by one place
            if (node.right) dfs(node.right, sum * 10 + node.val);
        }
    }
    
    // Call on root with current sum 0
    dfs(root, 0);

    // Return answer
    return total;
};

let root = [1,2,3];
console.log(sumNumbers2(n1));
console.log(sumNumbers2(root));