// Splice is O(N) operation and overall time complexity is O(N^2).

var MedianFinder = function() {
    this.medianArr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    const arr = this.medianArr;
    
    for(let n = 0; n < this.medianArr.length; n++){
        if(this.medianArr[n] > num){
            return this.medianArr.splice(n, 0, num);
        }
    }
    this.medianArr.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    // const sum = this.medianArr.reduce((acc, curr) => acc+curr, 0);
    // let median = 0;
    let len = this.medianArr.length;

    if (len % 2 === 0){
        // median = (this.medianArr[len/2] + this.medianArr[(len/2) - 1])/2;
        return (this.medianArr[len/2] + this.medianArr[(len/2)-1])/2;
    } else {
        // median = Math.floor(this.medianArr[(len/2)]);
        return this.medianArr[Math.floor(len/2)];
    }

    return median;
};

const medianFinder1 = new MedianFinder();
console.log(medianFinder1.addNum(1));    // arr = [1]
console.log(medianFinder1.addNum(2));    // arr = [1, 2]
console.log(medianFinder1.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
console.log(medianFinder1.addNum(3));    // arr[1, 2, 3]
console.log(medianFinder1.findMedian()); // return 2.0

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class MedianFinder2 {

    constructor() {
        this.finder = [];
    }

    addNum(num) {
        const len = this.finder.length;
        if (len === 0 || this.finder[len - 1] <= num)
            this.finder.push(num);
        else {
            const i = this.finder.findIndex(n => n > num);
            this.finder.splice(i, 0, num);
        }
    }

    findMedian() {
        const len = this.finder.length;
        const mid = Math.floor(len / 2);
        if (len % 2) return this.finder[mid];
        else return (this.finder[mid - 1] + this.finder[mid]) / 2;
    }
}

const medianFinder = new MedianFinder2();
console.log(medianFinder.addNum(1));    // arr = [1]
console.log(medianFinder.addNum(2));    // arr = [1, 2]
console.log(medianFinder.findMedian()); // return 1.5 (i.e., (1 + 2) / 2)
console.log(medianFinder.addNum(3));    // arr[1, 2, 3]
console.log(medianFinder.findMedian()); // return 2.0