/**
 * @param {number} n
 */
var MRUQueue = function(n) {
    this.queue = [...Array(n).keys()].map((x) => ++x);
    console.log(this.queue);
    const arr = [...Array(n+1).keys()].slice(1);
    const arrFrom = Array.from({length: n}, (_, index) => index + 1);
    // console.log(arr);
    // console.log(arrFrom);
};

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    const kElem = this.queue.splice(k-1, 1)[0];
    // console.log(kElem, this.queue);

    this.queue.push(kElem);

    return kElem;
};

const mr = new MRUQueue(8);
console.log(mr.fetch(3));
console.log(mr.fetch(5));
console.log(mr.fetch(2));
console.log(mr.fetch(8));
console.log(mr.fetch(1));

// Using DLL

class MRUQueueDLL {
    constructor(size) {
      this.head = null;
      this.tail = null;
      this._init(size);
    }
    
    _init(size) {
      for(let i = 0; i < size; i++) {
        this.add(i+1);
      }
    }
    
    // adds a node to the end of the queue
    add(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.tail.next = node;
        node.prev = this.tail;
        // update tail
        this.tail = node;
      }
    }
    
    delete(node) {
      const { next, prev } = node;
      if (this.head == node) {
        this.head = next;
        next.prev = null;
      } else {
        next.prev = prev;
        prev.next = next;
      }
    }
    
    fetch(nodePosition) {
      let current = this.head;
      while(current && nodePosition - 1 > 0) {
        current = current.next;
        nodePosition--;
      }
      
      // delete the current node if not already at the end
      if (this.tail !== current) {
        this.delete(current);
        // add the current node to the tail
        this.add(current.value);
      }
      
      return current ? current.value : null;
    }
  }
  
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
  }