var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b) => a[1]-b[1]);
    console.log(intervals);

    let prev= intervals[0];
    let removeCount = 0;

    for (let i=1; i<intervals.length;i++){
        if (prev[1]>intervals[i][0]){
            removeCount++;
        } else {
            prev = intervals[i];
        }
    }

    return removeCount;
};

let intervals = [[1,2],[2,3],[3,4],[1,3]];
console.log(eraseOverlapIntervals(intervals));

intervals = [[1,2],[1,2],[1,2]];
console.log(eraseOverlapIntervals(intervals));

intervals = [[1,2],[2,3]];
console.log(eraseOverlapIntervals(intervals));
