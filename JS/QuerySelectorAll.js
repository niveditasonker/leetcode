/**
 * Check the tag and the class name to see if the element matches
 * @param {*} node HTML element
 * @param {*} selector string
 * @return boolean
 */
function isMatch(element, selector) {
    return element.tagName === selector.toUpperCase() || 
      element.classList.contains(selector);
}

/**
 * traverse all the child node of document elements, if elements match the selector, add to the result.
 * @param {*} node HTML Element 
 */
function traverse(node) {
    if(node == null) 
      return;
    if(isMatch(node, selector)) // add result if its a match !
      result.push(node);
    for(var child of node.children) // check all children
      traverse(child);
}
  
myQuerrySelectorAll = function(selector) {
    var result = [];
    traverse(document.documentElement); // document.documentElement points root Element(the html element)
    return result;
}