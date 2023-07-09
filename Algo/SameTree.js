var isSameTree = function(p, q) {
    if (!p && q || p && !q){
        return false;
    }

    if (!p && !q){
        return true;
    }

    if (p.val !== q.val){
        return false;
    }

    let pStack = [p], qStack = [q];

    while (pStack.length && qStack.length){
        const pNode = pStack.pop();
        const qNode = qStack.pop();

        if (pNode.val !== qNode.val) return false;

        if (pNode && !qNode || !pNode && qNode) {
            return false;
        }

        if (pNode.left && qNode.left){
            pStack.push(pNode.left);
            qStack.push(qNode.left);
        } else if(!pNode.left&&!qNode.left){

        } else {
            return false;
        }

        if (pNode.right && qNode.right){
            pStack.push(pNode.right);
            qStack.push(qNode.right);
        } else if(!pNode.right && !qNode.right){

        } else {
            return false;
        }
    }

    return (qStack.length === 0 && pStack.length === 0);
};

var isSameTreeRecursiveDFS = function (p,q){

    if (dfs(p,q)){
        return true;
    }

    return false;

    function dfs(tree1, tree2){
        if (!tree1 && tree2 || tree1 && !tree2){
            return false;
        }

        if (!tree1 && !tree2){
            return true;
        }

        if (tree1.val !== tree2.val){
            return false;
        }

        const left = dfs(tree1.left, tree2.left);
        const right = dfs(tree1.right, tree2.right);

        if (!left || !right) {
            return false;
        }

        return true;
    }
}

function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

let n1 = new TreeLinkNode(3);
let n2 = new TreeLinkNode(2);
let n3 = new TreeLinkNode(1);

let t4 = new TreeLinkNode(3);
let t5 = new TreeLinkNode(2);
let t6 = new TreeLinkNode(1);

n1.left = n2;
n1.right = n3;


t4.left = t5;
t4.right = t6;


console.log(isSameTreeRecursiveDFS(n1, t4));

console.log(isSameTree(n1, t4));