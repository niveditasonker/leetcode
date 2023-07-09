function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

var levelOrder = function(root) {
    if (!root) return [];

    let q = [root];
    let res = [];

    while (q.length > 0){
        let len = q.length;
        const level = [];

        for (let i=0; i< len; i++){
            const node = q.shift();
            level.push(node.val);

            if (node.left){
                q.push(node.left);
            }

            if (node.right){
                q.push(node.right);
            }
        }
        res.push(level);
    }
    return res;
};


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

console.log(levelOrder(n1));