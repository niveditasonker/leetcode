class TransactionKVStore {
    // get -> just return from the store
    // begin -> just adds a new hashMap to the stack
    // Commit -> take all the stuff in transactional Stack and dump it into store
    // Rollback -> clears transactional stack
    // Set -> updates the transactional stack but not the store.
   // delete -> remove from store if not part of transaction, else remove the key from curr transaction.

   constructor() {
      this.store = new Map();
      this.transactionalStack = [];
    }
  
    begin() {
      this.transactionalStack.push(new Map());
    }
  
    get(key) {
      if (this.store.size === 0 || !this.store.has(key)) {
        return null;
      }
  
      return this.store.get(key);
    }
  
    set(key, val) {
      if (this.transactionalStack.length === 0) {
        this.store.set(key, val);
        return;
      }
  
      const curr = this.transactionalStack[this.transactionalStack.length - 1];
      curr.set(key, val);
    }
  
    commit() {
      if (this.transactionalStack.length === 0) {
        throw new Error("Stack is empty, nothing to commit");
      }
      const curr = this.transactionalStack.pop();
      for (const [key, val] of curr.entries()) {
        this.store.set(key, val);
      }
    }
  
    rollback() {
      if (this.transactionalStack.length === 0) {
        throw new Error("Nothing to rollback");
      }
      this.transactionalStack.pop();
    }
  
    delete(key) {
      if (this.transactionalStack.length !== 0) {
        this.store.delete(key);
      }
      const curr = this.transactionalStack[this.transactionalStack.length - 1];
      curr.delete(key);
    }
  }
  
  const store = new TransactionKVStore();
  
  store.begin();
  store.set("key1", "value1");
  store.set("key2", "value2");
  console.log(store.get("key1")); // Output: value1
  console.log(store.get("key2")); // Output: value2
  store.commit();
  
  store.set("key1", "newValue1");
  store.begin();
  store.set("key2", "newValue2");
  store.delete("key1");
  console.log(store.get("key1")); // Output: null
  console.log(store.get("key2")); // Output: newValue2
  store.rollback();
  
  console.log(store.get("key1")); // Output: newValue1
  console.log(store.get("key2")); // Output: value2