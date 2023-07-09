var RandomizedSet = function() {
    this.map = new Map();
    this.arr = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    const key = this.map.get(val);

    if (key !== undefined) return false

    this.map.set(val, this.arr.length);
    this.arr.push(val);
    return true;
    

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    const key = this.map.get(val);
    if (key == undefined) return false;

    // this.swap(key, this.arr.length-1);
    this.arr[key] = this.arr[this.arr.length-1];
    this.arr.pop();
    this.map.set(this.arr[key], key);
    this.map.delete(key);
    return true;

};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)];
};

RandomizedSet.prototype.swap = function(a, b){
    [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]];
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

class RandomizedSet {
    constructor() {
      this.map = new Map();
      this.list = [];
    }
  
    insert(val) {
      if (this.map.has(val)) return false;
      this.map.set(val, this.list.length);
      this.list.push(val);
      return true;
    }
  
    remove(val) {
      if (!this.map.has(val)) return false;
      const idx = this.map.get(val);
      this._swap(idx, this.list.length - 1);
      this.list.pop();
      this.map.set(this.list[idx], idx);
      this.map.delete(val);
      return true;
    }
  
    getRandom() {
      return this.list[Math.floor(Math.random() * this.list.length)];
    }
  
    _swap(a, b) {
      const tmp = this.list[a];
      this.list[a] = this.list[b];
      this.list[b] = tmp;
    }
  }