function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

/*
            10
           /  \
          4   20
         /    / \
        2   15   40
*/

let n1 = new TreeLinkNode(10);
let n2 = new TreeLinkNode(4);
let n3 = new TreeLinkNode(20);
let n4 = new TreeLinkNode(2);
let n5 = new TreeLinkNode(15);
let n6 = new TreeLinkNode(40);
// let n7 = new TreeLinkNode(null);
// let n8 = new TreeLinkNode(1);
// let n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = null;
n3.left = n5;
n3.right = n6;

/*
private TreeNode KthLargest(TreeNode root, int k) {
    TreeNode curr = root;
    TreeNode Klargest = null;
    // count variable to keep count of visited Nodes
    int count = 0;
    while (curr != null) {
        // if right child is NULL
        if (curr.right == null) {
            // first increment count and check if count = k
            if (++count == k)
                Klargest = curr;
            // otherwise move to the left child
            curr = curr.left;
        } else {
            // find inorder successor of current Node
            TreeNode succ = curr.right;
            while (succ.left != null && succ.left != curr)
                succ = succ.left;

            if (succ.left == null) {
                // set left child of successor to the
                // current Node
                succ.left = curr;
                // move current to its right
                curr = curr.right;
            }
            // restoring the tree back to original binary
            // search tree removing threaded links
            else {
                succ.left = null;
                if (++count == k)
                    Klargest = curr;
                // move current to its left child
                curr = curr.left;
            }
        }
    }
    return Klargest;
}
*/

const KthLargest = (root, k) => {
    const stack = [];
    let current = root;
    let n = 0;

    while(stack.length > 0 || current){
        while(current) {
            stack.push(current);
            current = current.right
        };

        current = stack.pop();
         n += 1;

         if (n===k) {
            return current.val;
         }

         current = current.left;

    }
}

const kthLargestInO1Space = (root, k) => {
    // https://www.geeksforgeeks.org/kth-largest-element-bst-using-constant-extra-space/#
    let curr = root;
    let Klargest = null;
 
    // count variable to keep count of visited Nodes
    let count = 0;
 
    while (curr != null){
        // if right child is NULL
        if (curr.right == null){
 
            // first increment count and
            // check if count = k
            if (++count == k)
                Klargest = curr;
 
            // otherwise move to the left child
            curr = curr.left;
        } else {
 
            // find inorder successor of
            // current Node
            let succ = curr.right;
 
            while (succ.left != null && succ.left != curr){
                succ = succ.left;
            }
            if (succ.left == null){
 
                // set left child of successor to the
                // current Node
                succ.left = curr;
 
                // move current to its right
                curr = curr.right;
            } else {
            // restoring the tree back to original binary
            // search tree removing threaded links

                succ.left = null;
 
                if (++count == k)
                    Klargest = curr;
 
                // move current to its left child
                curr = curr.left;
            }
        }
    }
    return Klargest.val;
}

console.log(KthLargest(n1, 3));
console.log(kthLargestInO1Space(n1, 3));
// [5,3,6,2,4,null,null,1], 3
