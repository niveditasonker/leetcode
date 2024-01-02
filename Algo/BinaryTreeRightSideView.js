var rightSideView = function(root) {

    let q = [[root, 0]];
    let res = [];

    if (!root) return res;

    while(q.length > 0) {
        // let size = q.length;
        let [node, level] = q.shift();

        

        if (res.length === level){
            res.push(node.val);
        }
        console.log(`right: ${res.length}, level: ${level}, node: ${node.val}`);

        if (node.right){
            q.push([node.right, level+1]);
        }
        console.log(`left: ${res.length}, level: ${level}, node: ${node.val}`);

        if (node.left){
            q.push([node.left, level+1]);
        }
    }

    return res;
};

var rightSideViewRecursive = function(root) {
    if (!root) return [];
    let res = [];
    pre(root, 0);
    return res;
    
    function pre(node, h) {
        if (!node) return;
        res[h] = node.val;
        pre(node.left, h+1);
        pre(node.right, h+1);
    }
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

// [1,2,3,null,5,null,4]
let t1 = new TreeLinkNode(1);
let t2 = new TreeLinkNode(2);
let t3 = new TreeLinkNode(3);
let t4 = new TreeLinkNode(null);
let t5 = new TreeLinkNode(5);
let t6 = new TreeLinkNode(null);
let t7 = new TreeLinkNode(4);

t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right = t5;
t3.left = t6;
t3.right = t7;



console.log(rightSideView(n1));
console.log(rightSideView(t1));

console.log("=====> Recursive");
console.log(rightSideViewRecursive(n1));
console.log(rightSideViewRecursive(t1));