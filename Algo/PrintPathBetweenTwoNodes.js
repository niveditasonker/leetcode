
class Node {
    constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
    }
}

/* Helper function that allocates a new node with the 
given data and null left and right pointers. */
function getNode(data){ 
    let newNode = new Node(data); 
    return newNode; 
} 

// Function to check if there is a path from root 
// to the given node. It also populates 
// 'arr' with the given path 
function getPath(root, arr, target) { 
    // if root is null 
    // there is no path 
    if (root==null) 
        return false; 

    // push the node's value in 'arr' 
    arr.push(root.data); 

    // if it is the required node 
    // return true 
    if (root.data == target) 
        return true; 

    // else check whether the required node lies 
    // in the left subtree or right subtree of 
    // the current node 
    if (getPath(root.left, arr, target) || getPath(root.right, arr,target)) 
        return true; 

    // required node does not lie either in the 
    // left or right subtree of the current node 
    // Thus, remove current node's value from 
    // 'arr'and then return false 
    arr.pop(); 
    return false; 
} 

// Function to print the path between 
// any two nodes in a binary tree 
function printPathBetweenNodes(root, n1, n2){ 
    // vector to store the path of 
    // first node n1 from root 
    let path1= []; 

    // vector to store the path of 
    // second node n2 from root 
    let path2 = []; 

    let res = [];

    getPath(root, path1, n1); 
    getPath(root, path2, n2); 

    let intersection = -1; 

    // Get intersection point 
    let i = 0, j = 0; 
    while (i != path1.length || j != path2.length) { 

        // Keep moving forward until no intersection 
        // is found 
        if (i == j && path1[i] == path2[i]) { 
            i++; 
            j++; 
        } 
        else { 
            intersection = j - 1; 
            break; 
        } 
    } 

    // Print the required path 
    for ( i = path1.length - 1; i > intersection; i--) 
        res.push( path1[i] + " ");

    for ( i = intersection; i < path2.length; i++) 
        res.push( path2[i] + " ");

    return res;
} 
	
// binary tree formation 
let root = getNode(0); 
root.left = getNode(1); 
root.left.left = getNode(3); 
root.left.left.left = getNode(7); 
root.left.right = getNode(4); 
root.left.right.left = getNode(8); 
root.left.right.right = getNode(9); 
root.right = getNode(2); 
root.right.left = getNode(5); 
root.right.right = getNode(6); 

let node1 = 7; 
let node2 = 4; 
console.log(printPathBetweenNodes(root, node1, node2)); 
