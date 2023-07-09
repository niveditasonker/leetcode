/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.map = new Map();
    this.set = new Set();

    for (let n of nums){
        const val = this.map.get(n) || 0;
        if (val > 0){
            this.map.delete(n);
            this.set.add(n);
            continue;
        }
        this.map.set(n, val+1);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    
    let val = this.map.keys().next().value;
    if (val == undefined || this.set.has(val)){
        return -1;
    }
    return val;

    // for (let i=0; i< this.nums.length; i++){
    //     if (!map.has(nums[i])) {
    //         map.set(nums[i]. map.get(nums[i]++));
    //     }
    // }

    // for (let [k,v] in map){
    //     if (v === 1) {
    //         return map[k];
    //         break;
    //     }
    // }

    // return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if (this.set.has(value)) return;
    if (this.map.get(value) > 0){
        this.map.delete(value);
        this.set.add(value);
    } else {
        this.map.set(value, 1);
    }
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

/**
 * @param {number[]} nums
 */
var FirstUnique2 = function(nums) {
    this.queue = nums;
    this.map = {};
    for(let i=0;i<this.queue.length;i++){
        this.map[this.queue[i]] = this.map[this.queue[i]]+1 || 1;
    }
};

/**
 * @return {number}
 */
FirstUnique2.prototype.showFirstUnique = function() {
    for(let i=0;i<this.queue.length;i++){
        if(this.map[this.queue[i]] == 1)
            return this.queue[i];
    }
    return -1;
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique2.prototype.add = function(value) {
    this.queue.push(value);
    this.map[value] = this.map[value]+1 || 1;
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

let arr = ["FirstUnique","showFirstUnique","add","showFirstUnique","add","showFirstUnique","add","showFirstUnique"]
[[[2,3,5]],[],[5],[],[2],[],[3],[]];