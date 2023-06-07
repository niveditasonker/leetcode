function createNode(value, left = null, right = null) {
    return { value, left, right };
}

const tree = createNode(1,
    createNode(2,
        createNode(4),
        createNode(5)
    ),
    createNode(3,
        createNode(6),
        createNode(7)
    )
)

// console.log(tree);

const DFSTree = (root) => {
    if (!root) return [];

    let stack = [root];
    let result = [];

    while(stack.length > 0){
        const currNode = stack.pop();
        result.push(currNode.value);

        if (currNode.right) stack.push(currNode.right);

        if (currNode.left) stack.push(currNode.left);
    }

    return result;
}

function dfsTree(node) {
    if (!node) {
      return [];
    }
  
    const stack = [node];
    const result = [];
  
    while (stack.length > 0) {
      const current = stack.pop();
      result.push(current.value);
  
      if (current.right) {
        stack.push(current.right);
      }
  
      if (current.left) {
        stack.push(current.left);
      }
    }
  
    return result;
  }

console.log(DFSTree(tree));
console.log(dfsTree(tree));