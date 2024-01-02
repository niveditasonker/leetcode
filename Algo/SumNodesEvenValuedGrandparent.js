var sumEvenGrandparent = function(root) {
    if(!root) return sum;

    if(grandParent && grandParent % 2 === 0) sum += root.val;

    grandParent = parent;

    parent = root.val;

    if(root.left){
        sum = sumEvenGrandparent(root.left, sum, grandParent, parent);
    }

    if(root.right){
        sum = sumEvenGrandparent(root.right, sum, grandParent, parent);
    }

    return sum;
};

var sumEvenGrandparent = function (root) {
    if (root === null) return;
    const stack = [root];
    let res = 0;
  
    while (stack.length > 0) {
      const current = stack.pop();
  
      if (current.val % 2 === 0) {
        if (current.left) {
          if (current.left.left) res += current.left.left.val;
          if (current.left.right) res += current.left.right.val;
        }
        if (current.right) {
          if (current.right.left) res += current.right.left.val;
          if (current.right.right) res += current.right.right.val;
        }
      }
  
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  
    return res;
};

var sumEvenGrandparent = function(node, parent, grandparent) {
    // Check base case
    if (!node) return 0;
  
    // Continue traversing left and right nodes while
    // increasing the value is the grandparents value is even
    return (
      sumEvenGrandparent(node.left, node, parent) +
      sumEvenGrandparent(node.right, node, parent) +
      (grandparent && grandparent.val % 2 == 0 ? node.val : 0)
    )
};