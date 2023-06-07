function createNode(val, left = null, right = null) {
    return { val, left, right };
}
// [8,3,10,1,6,null,14,null,null,4,7,13]

const tree = createNode(10,
    createNode(5,
        createNode(3),
        createNode(7)
    ),
    createNode(15,
        createNode(null),
        createNode(18),
    )
)

// console.log(tree);

var rangeSumBST = function(root, low, high) {
    let sum = 0;
    let stack = [root];

    while (stack.length) {
        let curr = stack.pop();

        if (curr.val >= low && curr.val <= high) {
            sum += curr.val;
        }

        if (curr.left) stack.push(curr.left);

        if (curr.right) stack.push(curr.right);
    }

    return sum;
};

console.log(rangeSumBST(tree, 7, 15));