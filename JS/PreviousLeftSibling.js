function previousLeftSibling(root, target) {
    if (!root) return null;

    let queue = [root];

    while(queue.length){
        let len = queue.length;
        let prev= null;

        for (let i=0; i< len; i++) {
            let curr = queue.shift();
            if (curr === target) return prev;

            if (curr.children){
                queue.push(...curr.children);
            }

            prev= curr;
        }
    }
}