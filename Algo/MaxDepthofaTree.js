function createNode(val, left = null, right = null) {
    return { val, left, right };
}
// [8,3,10,1,6,null,14,null,null,4,7,13]

const tree = createNode(3,
    createNode(9),
    createNode(20,
        createNode(15),
        createNode(7)
    )
)

var maxDepth = function(root) {
    if (!root) return 0;
    const queue = [root];
    let depth = 0;
    while (queue.length !== 0) {
        depth++;
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            if (queue[i].left) queue.push(queue[i].left);
            if (queue[i].right) queue.push(queue[i].right);
        }
        queue.splice(0, len);
    }
    return depth;
};

var maxDepth2 = function(root) {
	let answer = 0;
    
    if (root == null) return answer;

    let parent = [ [[root], 1] ];
    let temp, children, depth, nodes;
    
    while(parent.length) {
        temp = parent.pop();
        nodes = temp[0];
        depth = temp[1];
        
        children = [];
        
        for(let i=0;i< nodes.length; i++) {
            if((nodes[i].left == null) && (nodes[i].right == null)) {
                answer = Math.max(answer, depth);
            }

            if(nodes[i].left) 
                children.push(nodes[i].left);
            
            if(nodes[i].right) 
                children.push(nodes[i].right);
        }
        
        if(children.length) {
            parent.push([children, depth + 1]);
        }
    }
    
    return answer;
}

let root = [3,9,20,null,null,15,7];
console.log(maxDepth(tree));
console.log(maxDepth2(tree));


const maxDepthRecursive = function(root) {
    if(root == null) return 0;
    return 1 + Math.max(maxDepthRecursive(root.left), maxDepthRecursive(root.right));
}

console.log(maxDepthRecursive(tree));

