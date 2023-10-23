function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right =  null;
}

var lowestCommonAncestor = function(root, p, q) {
    if(!root) return root;

    if (root.val === p.val || root.val === q.val) {
        return root;
    }

    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right!== null){
        return root;
    } else {
        if (left !== null){
            return left;
        }else{
            return right;
        }
    }


};
// time: O(n) space: O(n)
let t1 = new TreeLinkNode(3);
let t2 = new TreeLinkNode(5);
let t3 = new TreeLinkNode(1);
let t4 = new TreeLinkNode(6);
let t5 = new TreeLinkNode(2);
let t6 = new TreeLinkNode(0);
let t7 = new TreeLinkNode(8);
let t8 = new TreeLinkNode(7);
let t9 = new TreeLinkNode(4);

t1.left =  t2;
t1.right = t3;
t2.left =  t4;
t2.right = t5;
t3.left =  t6;
t3.right = t7;
t5.left = t8;
t5.right = t9;

let n1 = new TreeLinkNode(1);
let n2 = new TreeLinkNode(2);
let n3 = new TreeLinkNode(3);
let n4 = new TreeLinkNode(4);
let n5 = new TreeLinkNode(5);
let n6 = new TreeLinkNode(6);
let n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

console.log(lowestCommonAncestor(n1,4,5));


console.log(lowestCommonAncestor(t1,5, 1));

// Iterative

const lowestCommonAncestorIterative = function (root, p, q) {
	const queue = [root];

	while (queue.length) {
		const node = queue.shift();

		if (node.left) {
			node.left.parent = node;
			queue.push(node.left);
		}

		if (node.right) {
			node.right.parent = node;
			queue.push(node.right);
		}
	}

	const set = new Set();
	while (p || q) {
		if (p) {
			if (set.has(p.val)) return p;
			set.add(p.val);
			p = p.parent;
		}
		if (q) {
			if (set.has(q.val)) return q;
			set.add(q.val);
			q = q.parent;
		}
	}
};

console.log(lowestCommonAncestorIterative(n1,4,5));
console.log(lowestCommonAncestorIterative(t1,5, 1));