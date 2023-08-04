//Solution using just hashmap
var TimeMap = function() {
    this.timeMap = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    const comboKey = `${key}${timestamp}`;
    this.timeMap.set(comboKey, value);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    

    while (timestamp > 0){
        const comboKey = `${key}${timestamp}`;

        if (this.timeMap.has(comboKey)){
            return this.timeMap.get(comboKey);
        }
        timestamp--;
    }

    return '';
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

// Sol using binary search
var TimeMap2 = function() {
    this.timeMap = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap2.prototype.set = function(key, value, timestamp) {
    if (!this.timeMap.has(key)){
        this.timeMap.set(key, []);
    }
    this.timeMap.get(key).push({timestamp, value});
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap2.prototype.get = function(key, timestamp) {
    if (!this.timeMap.has(key)) return '';

    const arr = this.timeMap.get(key);

    let left = 0, right = arr.length-1;
    let res = '';

    while (left <= right){
        let mid = Math.floor((left+right)/2);

        if (arr[mid].timestamp === timestamp){
            return arr[mid].value;
        }

        if (arr[mid].timestamp <= timestamp){
            left = mid + 1;
            // this is required because the ts can be less than the target ts too.
            // In that case store the value. if we don't find exact match return this res;
            res = arr[mid].value;
        } else {
            right = mid-1;
        }
    }

    return res;
};