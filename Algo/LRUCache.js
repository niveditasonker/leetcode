/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.limit = capacity;
    this.cacheMap = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // if (!this.cacheMap.has(key)) return -1; // this is O(n), instead use beloe approach

    const val = this.cacheMap.get(key);
    if(val === undefined) {
        return -1
    }

    this.cacheMap.delete(key);
    this.cacheMap.set(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cacheMap.has(key)) {
        this.cacheMap.delete(key);
    } else if (this.cacheMap.size === this.limit){
        const last = this.cacheMap.keys().next().value;

        /*
        Last item from map:

            const getLastItemInMap = cacheMap => Array.from(cacheMap)[cacheMap.size-1]
            const getLastKeyInMap = cacheMap => Array.from(cacheMap)[cacheMap.size-1][0]
            const getLastValueInMap = cacheMap => Array.from(cacheMap)[cacheMap.size-1][1]
        */
        this.cacheMap.delete(last);
    }

    this.cacheMap.set(key, value);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Using DLL & hashmap : https://leetcode.com/problems/lru-cache/solutions/3399889/javascript-double-linked-list-and-hashtable-solution/