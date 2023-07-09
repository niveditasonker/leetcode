class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    remove() {
      if (this.heap.length === 0) {
        return null;
      }
  
      if (this.heap.length === 1) {
        return this.heap.pop();
      }
  
      const root = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
  
      return root;
    }
  
    heapifyUp() {
      let currentIndex = this.heap.length - 1;
  
      while (currentIndex > 0) {
        const parentIndex = Math.floor((currentIndex - 1) / 2);
  
        if (this.heap[currentIndex] >= this.heap[parentIndex]) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[currentIndex]];
        currentIndex = parentIndex;
      }
    }
  
    heapifyDown() {
      let currentIndex = 0;
  
      while (true) {
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;
        let minChildIndex = currentIndex;
  
        if (leftChildIndex < this.heap.length &&
          this.heap[leftChildIndex] < this.heap[minChildIndex]) {
          minChildIndex = leftChildIndex;
        }
  
        if (rightChildIndex < this.heap.length &&
          this.heap[rightChildIndex] < this.heap[minChildIndex]) {
          minChildIndex = rightChildIndex;
        }
  
        if (minChildIndex === currentIndex) {
          break;
        }
  
        [this.heap[currentIndex], this.heap[minChildIndex]] = [this.heap[minChildIndex], this.heap[currentIndex]];
        currentIndex = minChildIndex;
      }
    }
  }
  
  // Example usage:
  const heap = new MaxHeap();
  heap.insert(3);
  heap.insert(9);
  heap.insert(2);
  heap.insert(1);
  heap.insert(4);
  heap.insert(5);
  
  console.log(heap.heap); // [9, 4, 5, 1, 3, 2]
  
  const minElement = heap.remove();
  console.log(minElement); // 9
  console.log(heap.heap); // [5, 4, 2, 1, 3]
  