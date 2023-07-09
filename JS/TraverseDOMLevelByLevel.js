// function flatten(root) {
//     const flatArray = [].concat.apply([], root.children);
//     return flatArray;
//   }

// function flattenArrayUsingSpread(root) {
//     return [].concat(...root.children);
// }

// function flattenUsingReduce(root) {
//     const flatArray = root.children.reduce((acc, cur) => {
//         return acc.concat(cur);
//     }, []);
// }

function flatten(root) {
    if (!root) return [];

    let result = [];

    let queue = [root];

    while (queue.length) {
        let node = queue.shift();
        result.push(node);

        if (node.children) {
            queue.push(...node.children)
        }

        // if (node.children.left) {
        //     queue.push()
        // }
    }

    return result;
}