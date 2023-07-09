var kthLargestLevelSum = function(root, k) {
    let q = [root];
    let sum = [];

    while(q.length>0){
        let levelSum = 0;
        let len = q.length;

        for (let i=0; i<len; i++){
            const curr = q.shift();
            levelSum += curr.val;

            if(curr.left){
                q.push(curr.left);
            }

            if (curr.right){
                q.push(curr.right);
            }
        }

        sum.push(levelSum);
    }

    sum.sort((a,b) => b-a);
    console.log(sum);

    if (sum.length < k) {
        return -1;
    }

    return sum[k-1];
};

function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}


let n1 = new TreeLinkNode(5);
let n2 = new TreeLinkNode(8);
let n3 = new TreeLinkNode(9);
let n4 = new TreeLinkNode(2);
let n5 = new TreeLinkNode(1);
let n6 = new TreeLinkNode(3);
let n7 = new TreeLinkNode(7);
let n8 = new TreeLinkNode(4);
let n9 = new TreeLinkNode(6);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
n4.left = n8;
n4.right = n9;

console.log(kthLargestLevelSum(n1, 2));