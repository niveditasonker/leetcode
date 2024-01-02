// element.children => HTMLCollection
// element.className => string

/**
* @function getByClassName
* @param {Element} root – The root of the DOM tree
* @param {string} className
* @return {Array<Element>} nodes – All the nodes in the tree which include the target className in their classes.
*/
function getByClassName(root, className) {
    const res = [];

    const bfs = (root, target, scoped=false) => {
        const q = [root];

        while(q.length){
            const len = q.length;

            for (let i=0; i<len; i++){
                const node = q.shift();

                if (!scoped && node.className === target){
                    res.push(node);
                }

                for (const child of node.children){
                    // if (scoped){
                    //     console.log("Here");
                    //     if (target === child.children){
                    //         res.push(child);
                    //     }
                    // } else {
                        q.push(child);
                    // }
                }
            }
        }
    }
    console.log(className);
    bfs(root, className);
    return res;
}

const { JSDOM } = require("jsdom");
const { document } = new JSDOM(`
  <div class='a' id="root">
    <div class='b' id='b-1'>
      <div class='a' id='a-2'>
        <div class='d' id='d-1'></div>
      </div>
      <div class='c' id='c-1'>
        <div class='a' id='a-3'>
          <div class='d' id='d-2'></div>
        </div>
      </div>
    </div>
  </div>
`).window;
const getIds = (elements=[]) => Array.from(elements).map(x => x.id);
const root = document.getElementById('root');
console.log('actual:  ', getIds(getByClassName(root, 'a')));
console.log('expected:' , `[ 'root', 'a-2', 'a-3' ]`);