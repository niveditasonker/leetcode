function TreeLinkNode(val) {
	this.val = val;
    this.left = this.right = this.next = null;
}

// using stack
var zigzagLevelOrder = function(root) {
	if(!root){
		return [];
	}
	
	var stack = [root];
	
    var fromLeft = true;
    var result = [];

    
    while(stack.length > 0){
        var tmpResult = [];
        var nextLevel = [];
    	var len = stack.length;
    	
        for(var i = 0; i < len; i++) {
            var node = stack.pop();
            tmpResult.push(node.val);
            
            if(fromLeft) {
                if(node.left) {
                    nextLevel.push(node.left);
                }
                if(node.right) {
                    nextLevel.push(node.right);
                }
            } else {
                if(node.right) {
                    nextLevel.push(node.right);
                }
                if(node.left) {
                    nextLevel.push(node.left);
                }
            }
        }
        fromLeft = !fromLeft;
        stack = nextLevel;
//        nextLevel = [];
        result.push(tmpResult);
//        tmpResult = [];
    }
    
    return result;
    
}

var zigzagLevelOrderUsingQ = function(root) {
    if(!root){
		return [];
	}
    
    let q = [root];
    let ans = [];
    let fromLeft = true;

    while( q.length > 0){
        let len = q.length;
        let nextLevel = [];

        for (let i=0 ;i<len; i++){
            const node = q.shift();
            

            if (fromLeft){
                nextLevel.push(node.val);
            } else {
                nextLevel.unshift(node.val)
            }

            if (node.left){
                q.push(node.left);
            }

            if (node.right){
                q.push(node.right);
            }
        }
        fromLeft = !fromLeft;
        ans.push(nextLevel);
    }

    return ans;
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

console.log(zigzagLevelOrder(n1));
console.log(zigzagLevelOrderUsingQ(n1));