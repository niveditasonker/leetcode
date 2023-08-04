function buildDom(root) {
    const element = document.createElement(root.type);
    if (root.children) { // assume it will be text only
      element.innerText = root.children;
    } else {
      for (let key in root.props) {
        if (key === "children") {
          for (let ch of root.props[key]) {
            element.append(buildDom(ch));
          }
        } else {
          element[key] = root.props[key];
        }
      }
    }
    return element;
}

const dom = {
    type: 'div',
    props: { id: 'hello', children: [{ type: 'h1', children: 'HELLO' }] },
};
let root = buildDom(dom);
document.body.append(root);

