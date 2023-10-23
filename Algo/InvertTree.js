var invertTree = function(root) {
    let stack = [root];

    while(stack.length){
        const node = stack.pop();

        if (node !== null && (node?.left || node?.right)){
            [node.left, node.right] = [node.right, node.left];
            stack.push(node.left, node.right);
        }
    }

    return root;
};

// BFS
function invertTreeBFS(root) {
    const queue = [root];
  
    while (queue.length) {
      const n = queue.shift();
      if (n != null) {
        [n.left, n.right] = [n.right, n.left];
        queue.push(n.left, n.right);
      }
    }
  
    return root;
}

// Recursion
function invertTreeRecursion(root) {
    if (root == null) return root;
    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
    return root;
}

function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

let n1 = new TreeLinkNode(3);
let n2 = new TreeLinkNode(2);
let n3 = new TreeLinkNode(1);

n1.left = n2;
n1.right = n3;

console.log(n1);
console.log(invertTree(n1));