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

    const qArr = [];

    for (let i=1; i<=n; i++){
      qArr.push(i);
    }
    // console.log(qArr);
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


// Using sqrt(n) complexity:

var MRUQueue = function(n) {
  this.queueSize = Math.floor(Math.sqrt(n));
  this.numberOfQueue = Math.ceil(n  / this.queueSize);
  this.queues = new Array(this.numberOfQueue);
  const lastQueueLength = n - this.queueSize * (this.numberOfQueue - 1);
  for(let i = 0; i < this.numberOfQueue; i++) {
      this.queues[i] = new Array(i !== this.numberOfQueue - 1 ? this.queueSize : lastQueueLength).fill(0);
      for(let k = 0; k <  this.queues[i].length; k++) {
          this.queues[i][k] = i * this.queueSize + k + 1;
      }
  }
};

MRUQueue.prototype.shift = function(i, val) {
  const queueLen = this.queues.length - 1
  let cur = val;
  for(let j = queueLen; i < j; j--) {
      this.queues[j].push(cur);
      cur = this.queues[j].shift();
  }
  this.queues[i].push(cur);
};

/** 
* @param {number} k
* @return {number}
*/
MRUQueue.prototype.fetch = function(k) {
  const i = Math.floor((k -1) / this.queueSize);
  const index = (k - 1) % this.queueSize;
  const [val] = this.queues[i].splice(index, 1);
  this.shift(i, val)
  return val;
};