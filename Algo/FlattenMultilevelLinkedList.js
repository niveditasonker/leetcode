 // Definition for a Node.
function Node(val,prev,next,child) {
   this.val = val;
   this.prev = prev;
   this.next = next;
   this.child = child;
};

function LinkedList(head=null){
    this.head = head;
    this.size = 0

}


/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    if (!head) {
        return null;
    }

    let tempNode = new Node(0, null, head, null);
    let stack = [head];
    let prev = null;

    while(stack.length !== 0){
        let curr = stack.pop();

        if (prev){
            curr.prev = prev;
            prev.next = curr;
        }

        if (curr.next !== null){
            stack.push(curr.next);
        }

        if (curr.child !== null){
            stack.push(curr.child);
            curr.child = null;
        }

        prev = curr;
    }

    return tempNode.next;
};

let node1 = new Node(2);
let node2 = new Node(5);
let node3 = new Node(3);
let node4 = new Node(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

let list = new LinkedList(node1);
console.log(list);