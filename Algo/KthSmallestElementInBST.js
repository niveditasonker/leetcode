function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

let n1 = new TreeLinkNode(5);
let n2 = new TreeLinkNode(3);
let n3 = new TreeLinkNode(6);
let n4 = new TreeLinkNode(2);
let n5 = new TreeLinkNode(4);
let n6 = new TreeLinkNode(null);
let n7 = new TreeLinkNode(null);
let n8 = new TreeLinkNode(1);
// let n7 = new TreeLinkNode(7);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.left = n8;

const kthSmallest = (root, k) => {
    const stack = [];
    let current = root;
    let n = 0;

    while(stack.length > 0 || current){
        while(current) {
            stack.push(current);
            current = current.left
        };

        current = stack.pop();
         n += 1;

         if (n===k) {
            return current.val;
         }

         current = current.right;

    }
}

console.log(kthSmallest(n1, 3));
// [5,3,6,2,4,null,null,1], 3
