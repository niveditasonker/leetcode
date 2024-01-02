/**
 * @param {number[]} w
 * Solution2 is a reference code for understanding
 */
var Solution2 = function(w) {
    this.arr = new Array();
    this.sum = 0;
    for(let i=0; i<w.length;i++){
        this.sum += w[i];
        for (let j=0;j<w[i]; j++){
            this.arr.push(i);
        }
    }
    console.log(this.arr);
};

/**
 * @return {number}
 */
Solution2.prototype.pickIndex = function() {
    const idx = Math.floor(Math.random() * this.sum);
    return this.arr[idx];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.map = new Map();
    this.sum = 0;
    for(let i=0; i<w.length;i++){
        this.sum += w[i];
        this.map.set(this.sum, i);
    }
    
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const idx = Math.floor(Math.random() * this.sum);

    for (let [k,v] of this.map){
        // console.log(k, v);
        if (idx < k) {
            return this.map.get(k);
        }
    }
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
//["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
//[[[1,3]],[],[],[],[],[]]
let sol = new Solution([1,3]);
console.log(sol.pickIndex());
console.log(sol.pickIndex()); // return )1
console.log(sol.pickIndex()); // return )1
console.log(sol.pickIndex()); // return )1
console.log(sol.pickIndex());