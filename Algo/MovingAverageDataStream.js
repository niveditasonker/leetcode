var MovingAverage = function(size) {
    this.queue = [];
    this.size = size;
    this.sum = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.queue.length >= this.size){
        this.sum = this.sum - this.queue.shift();
    }

    this.queue.push(val);

    this.sum = this.sum + val;

    const avg = this.sum/this.queue.length;
    return avg;
};

const movingAverage = new MovingAverage(3);
movingAverage.next(1); // return 1.0 = 1 / 1
movingAverage.next(10); // return 5.5 = (1 + 10) / 2
movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3