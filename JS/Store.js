class NodeStore {
    constructor(){
        this.store = {};
        this.id = 1;
    }
    

    set(node, value) {
        const id = node.dataset.storeid | this.id++;
        this.store[id] = value;
        node.dataset.storeid = id;
    }
    
    get(node) {
        const { storeid } = node.dataset;
        return this.store[storeid]
    }
    
    has(node) {
        const { storeid } = node.dataset;
        return storeid in this.store;
    }
}

// Array: O(n)
class NodeStoreArrayN {
  constructor() {
    this.keys = [];
    this.values = [];
  }

  set(node, value) {
    const index = this.keys.indexOf(node);

    if (index >= 0) {
      this.values[index] = value;
    } else {
      this.keys.push(node);
      this.values.push(value);
    }
  }

  get(node) {
    const index = this.keys.indexOf(node);
    return index >= 0 ? this.values[index] : undefined;
  }

  has(node) {
    return !!this.get(node);
  }
}
// Array: O(1)
class NodeStoreArray {
  constructor() {
    this.values = [];
  }

  set(node, value) {
    if (node.dataset.nodeStoreId) {
      this.values[node.dataset.nodeStoreId] = value;
    } else {
      node.dataset.nodeStoreId = this.values.length;
      this.values.push(value);
    }
  }

  get(node) {
    return this.values[node.dataset.nodeStoreId];
  }

  has(node) {
    return !!node.dataset.nodeStoreId;
  }
}
// Object: O(1)
class NodeStoreObject {
  constructor() {
    this.map = {};
    this.key = Symbol();
  }

  set(node, value) {
    node[this.key] = Symbol();
    this.map[node[this.key]] = value;
  }

  get(node) {
    return this.map[node[this.key]];
  }

  has(node) {
    return node[this.key] in this.map;
  }
}


class NodeStore  {
    // Internal cache to store node-value pairs
    _cache = {};
  
    // Set the value for a given DOM node
    set(node, value) {
      // Generate a unique key based on the length of the cache
      const key = Object.keys(this._cache).length;
      
      // Assign the generated key to the node using '__key' property
      node['__key'] = key;
  
      // Store the value in the cache using the generated key
      this._cache[key] = value;
    }
    
    // Get the value associated with a given DOM node
    get(node) {
      // Retrieve the key associated with the node
      const key = this.getKey(node);
      
      // Return the value from the cache using the key
      return this._cache[key];
    }
    
    // Check if a given DOM node exists in the store
    has(node) {
      // Retrieve the key associated with the node
      const key = this.getKey(node);
      
      // Check if the node exists in the cache by verifying if the value is not undefined
      return this._cache[key] !== undefined;
    }
    
    // Get the key associated with a given DOM node
    getKey(node) {
      // Retrieve the key stored in the '__key' property of the node
      return node['__key'];
    }
  }
  
  // TEST
  const node = document.createElement('p');
  const store = new NodeStore();
  
  // Set the value of 'node' to 1
  store.set(node, 1);
  console.log('result', store.get(node), 'expected', 1, 'passed', store.get(node) === 1); // 1
  
  // Update the value of 'node' to 2
  store.set(node, 2);
  console.log('result', store.get(node), 'expected', 2, 'passed', store.get(node) === 2); // 2
  
  const node2 = document.createElement('p');
  
  // Set the value of 'node2' to 3
  store.set(node2, 3);
  console.log('result', store.get(node2), 'expected', 3, 'passed', store.get(node2) === 3); // 3
  
  console.log('result', store.get(node), 'expected', 2, 'passed', store.get(node) === 2); // 2
