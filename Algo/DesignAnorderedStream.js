/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = [];
    this.pointer = 0;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    const res = [];

    this.stream[idKey-1] = value;

    while(this.stream[this.pointer]){
        res.push(this.stream[this.pointer]);
        this.pointer++;
    }

    return res;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

const oStream = new OrderedStream(5);
console.log(oStream.insert(3, "ccccc"));
console.log(oStream.insert(1, "aaaaa"));
console.log(oStream.insert(2, "bbbbb"));
console.log(oStream.insert(5, "eeeee"));
console.log(oStream.insert(4, "ddddd"));