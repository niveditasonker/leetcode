const { JSDOM } = require("jsdom");
const { document: document2 } = new JSDOM(`
<div class='a' id="root2">
    <div class=”a" id=”a-1”>
    <div class=”b" id=”b-1”>
        <div class=”c" id=”c-1”/>
        <div class=”c" id=”c-2”/>
    </div>
    <div class=”c" id=”c-3”/>
    </div>
</div>
`).window;

function getByClassName(root, className) {
    const res = [];

    const bfs = (root, target, scoped=false) => {
        const q = [root];

        while(q.length){
            const len = q.length;

            for (let i=0; i<len; i++){
                const node = q.shift();
                // console.log("node: ", node);
                if (!scoped && node.className === target){
                    res.push(node);
                }

                for (const child of node.children){
                    if (scoped){
                        console.log("Here");
                        if (target === child.children){
                            res.push(child);
                        }
                    } else {
                        q.push(child);
                    }
                }
            }
        }
    }
    console.log(`class: ${className}`);
    bfs(root, className);
    return res;
}
/*
function getByClassnameHierarchyArr(elem, names, idx) {
    if (elem.classList.contains(names[idx])) {
      if (idx === names.length - 1) {
        return elem;
      } else {
        let res = [];
        for (let children of elem.children) {
          res = res.concat(getByClassnameHierarchyArr(children, names, idx + 1));
        }
        return res;
      }
    }
    return [];
  }

  function getByClassnameHierarchy(elem, names) {
    const classList = names.split(">");
    const start = getByClassName(elem, classList[0]); // You can use your function from first problem
    let res = [];
    for (let item of start) {
      res.push(...getByClassnameHierarchyArr(item, classList, 0));
    }
    return res;
}

*/
function getByClassnameHierarchy(root, classNames) {
    const cnames = classNames.split('>')
    const isScoped = cnames.length > 1
    const query = cnames.pop()
    let parent = root

    const dfs = (node) => {
        if (cnames.length === 0) return null
        if (cnames[0] === node.className) {
            cnames.shift()
            parent = node
        }

        for (const child of node.children) {
            dfs(child)
        }
    }

    dfs(root)
    return getByClassName(parent, query, isScoped)
}

const getIds = (elements=[]) => Array.from(elements).map(x => x.id);
const root2 = document2.getElementById('root2');

console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>b')));
console.log(`a>b expected:` , `['b-1']`, '\n');


// order matters!:
console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'b>a')));
console.log(`b>a expected:` , `[]`, '\n');


// must be direct descendants:
console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>c')));
console.log(`a>c expected:` , `[c-3]`, '\n');

/*
// the number of classes in the string doesn't matter:
console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'a>b>c')));
console.log(`a>b>c expected:` , `['c-1', 'c-2']`, '\n');

console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'b>c')));
console.log(`b>c expected:` , `['c-1', 'c-2']`, '\n');

console.log('actual: ', getIds(getByClassnameHierarchy(root2, 'c')));
console.log(`c expected:` , `['c-1', 'c-2', 'c-3']`, '\n');

*/
