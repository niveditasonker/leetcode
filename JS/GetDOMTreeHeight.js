// Recursive
function getHeight(tree) {
    if (tree == null) return 0;

    // const domHeight = Math.max(...Array.from(tree.children).map(getHeight), 0) + 1;
    // return domHeight;

    let tallestHeight = 0;
    Array.from(tree.children).forEach((elem) => {
        tallestHeight = Math.max(tallestHeight, getHeight(elem));
    });

    return tallestHeight + 1;
}

const div = document.createElement('div')
div.innerHTML =`
div>
  <p>
    <button>Hello</button>
  </p>
</div>
<p>
  <span>World!</span>
</p>`;

console.log(getHeight(div));
// console.log(getHeight(document.getElementById(`root`)));

// DFS
function getHeight(tree) {
  let maxHeight = 0;
  
  if (!tree) {
    return maxHeight;
  }
    
  for (let chid of tree.children) {
    maxHeight = Math.max(maxHeight, getHeight(chid)); 
  }

  return maxHeight + 1;
}

// BFS
function getHeight(tree) {
    const queue = [ tree ]
    let height = 0

    if (!tree) {
        return 0
    }

    while (queue.length) {
        const length = queue.length

        for (let i = 0; i < length; i++) {
        const el = queue.shift()
        queue.push(...el.children)
        }

        height++
    }

return height
}