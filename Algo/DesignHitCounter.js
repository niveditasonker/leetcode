var HitCounter = function() {
    this.hitMap = {};
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    if (!this.hitMap[timestamp]) {
        this.hitMap[timestamp] = 0;
    }

    return ++this.hitMap[timestamp];
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    let count = 0;
    let low = timestamp > 300 ? timestamp - 300 : 0;

    while (timestamp > low){
        if (this.hitMap[timestamp]) {
            count += this.hitMap[timestamp]; 
        }
        timestamp--;
    }
    
    return count;
};

let input = 
["HitCounter", "hit", "hit", "hit", "getHits", "hit", "getHits", "getHits"]
[[], [1], [2], [3], [4], [300], [300], [301]];

var HitCounter2 = function() {
    this.ranges = []
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter2.prototype.hit = function(timestamp) {
    this.ranges.push(timestamp)
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter2.prototype.getHits = function(timestamp) {
    let target = timestamp-300;
    let low =-1, high = this.ranges.length-1;
    while(low<high)
    {
        let mid = Math.ceil((low+high)/2);
        if(this.ranges[mid]<=target)
        {
            low = mid;
        }
        else{
            high = mid-1
        }
    }
    return this.ranges.length-low-1
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */