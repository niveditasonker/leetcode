function nextRightSibling(root, target) {
    if (!root) return null;

    let queue = [root, null];

    while(queue.length){
        let len = queue.length;
        const curr = queue.shift();

        if (curr === target){
            return queue.shift();
        } else if (curr == null){
            queue.push(null);
        } else {
          (curr.children)
            queue.push(...curr.children);
        }
    }
    return null;
}

function nextRightSiblingUsingDOMAPI(root, target) {
    // If target is null, return null
    if(!target) return null;
    // If there is a right sibling return it
    if(target.nextElementSibling) return target.nextElementSibling;
    // There is no right sibling so we need to go to parent and look for another node
    let parent = target.parentElement;
    // Loop up towards root till we get a node with 
    while(parent){
      parent = nextRightSibling(root, parent);
      // because we're only 1 level above, if there's a first child, it is the right sibling.
      if(parent && parent.firstElementChild) return parent.firstElementChild;
    }
    // right sibling not found, return null
    return null;
  }