class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
        // return this.items.splice(-1);
        // return this.items.slice(-1);
      } else {
        throw new Error("Stack is empty. Cannot pop.");
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      } else {
        throw new Error("Stack is empty. Cannot peek.");
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    clear() {
      this.items = [];
    }
}

// Usage example:
const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

console.log(myStack.pop()); // Output: 3
console.log(myStack.peek()); // Output: 2
console.log(myStack.size()); // Output: 2
console.log(myStack.isEmpty()); // Output: false

myStack.clear();
console.log(myStack.isEmpty()); // Output: true
  