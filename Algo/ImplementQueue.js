class Queue {
    constructor() {
      this.queue = [];
    }
  
    enqueue(item) {
      this.queue.push(item);
    }
  
    dequeue() {
      return this.queue.shift();
    }
  
    isEmpty() {
      return this.queue.length === 0;
    }
  
    size() {
      return this.queue.length;
    }
  
    peek() {
      return this.queue[0];
    }
}

// Usage example:
const myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue()); // Output: 1
console.log(myQueue.peek());    // Output: 2
console.log(myQueue.size());    // Output: 2
console.log(myQueue.isEmpty()); // Output: false
  