/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let intervals = [];
    for (let i = 0; i < ranges.length; i++) {
      intervals.push([i - ranges[i], i + ranges[i]]);
    }
    console.log(intervals);
    intervals.sort((a, b) => a[0] - b[0]);
    
    console.log('sorted intervals: ', intervals);

    let currentL = 0, currentR = 0, taps = 0, i = 0;
    
    while (i < intervals.length) {
      while (i < intervals.length && intervals[i][0] <= currentL) {
        currentR = Math.max(currentR, intervals[i][1]);
        i++;
      }
      taps++;
      if (currentR >= n) {
        return taps;
      }
      if (currentL === currentR) {
        return -1;
      }
      currentL = currentR;
    }    
  };

let n = 5, ranges = [3,4,1,1,0,0];
console.log(minTaps(n, ranges));