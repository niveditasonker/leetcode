/*
element.children => HTMLCollection
element.classList.contains(string) => Boolean
element.parentElement => Element
*/

const { JSDOM } = require("jsdom");

// (element: Element, className: string) => [Element]
function getByClassName(element, className, ) {
    const res = [];
    
    const bfs = (root, target, state = false) => {
        const q = [root];
        
        // console.log("Queue: ", q);
        
        while(q.length){
            const len = q.length;
            
            for (let i=0; i<len; i++){
                const node = q.shift();
                
                // console.log(node.classList);
                
                if (node.className === target){
                    res.push(node);
                }
                
                for (const child of node.children){
                    // if (state){
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
    
    bfs(element, className);
    return res;
}

// const { JSDOM } = require("jsdom");
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

// getByClassName();
const getIds = (elements=[]) => Array.from(elements).map(x => x.id);
// const root = document.getElementById('root');
// console.log('actual:  ', getIds(getByClassName(root, 'a')));
// console.log('expected:' , `[ 'root', 'a-2', 'a-3' ]`, '\n');
// console.log('actual:  ', getIds(getByClassName(root, 'd')));
// console.log('expected:' , `[ 'a-2', 'a-3' ]`, '\n');

// classNames examples: 'a>d', 'b>c>d', 'e'
function getByClassNameHierarchy(element, classNames) {
    const cNames = classNames.split('>');
    const top = cNames.pop();
    const parent = element;
    const output = [];
    
    const state = cNames.length > 1;
    
    const dfs = (node) => {
        if (cNames.length === 0) return null;
        if(cNames[0] === node.classNames){
            cNames.shift();
            parent = node;
        }
        
        for (const child of node.children){
            dfs(child);
        }
    }
    
    dfs(element);

    const tmp = getByClassName(element, cNames[0]);

    for (const elem of tmp){
        output.push(...getByClassNameHierarchy(elem, cNames, 0));
    }
    return output;
}

const { document: document2 } = new JSDOM(`
    <div id="root2">
      <div class="a" id="a-1">
        <div class="b" id="b-1">
          <div class="c" id="c-1"></div>
          <div class="c" id="c-2"></div>
        </div>
      </div>
    </div>
`).window;

const root2 = document2.getElementById('root2');

// basic case:
console.log('actual:      ', getIds(getByClassNameHierarchy(root2, 'a>b')));
console.log(`a>b expected:` , `['b-1']`, '\n');


// order matters!:
console.log('actual:      ', getIds(getByClassNameHierarchy(root2, 'b>a')));
console.log(`b>a expected:` , `[]`, '\n');


// gaps in the selector shouldn't return anything:
console.log('actual:      ', getIds(getByClassNameHierarchy(root2, 'a>c')));
console.log(`a>c expected:` , `[]`, '\n');

/*
// the number of classes in the string doesn't matter:
console.log('actual:        ', getIds(getByClassNameHierarchy(root2, 'a>b>c')));
console.log(`a>b>c expected:` , `['c-1', 'c-2']`, '\n');

console.log('actual:     ', getIds(getByClassNameHierarchy(root2, 'b>c')));
console.log(`b>c expected:` , `['c-1', 'c-2']`, '\n');

console.log('actual:    ', getIds(getByClassNameHierarchy(root2, 'c')));
console.log(`c expected:` , `['c-1', 'c-2']`, '\n');

*/