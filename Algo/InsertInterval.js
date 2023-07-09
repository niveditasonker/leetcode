var insert = function(intervals, newInterval) {
    let [newStart, newEnd] = newInterval;

    let left = [], right = [];

    for (let interval of intervals){
        const [first, last] = interval;

        // curr interval's last is smaller than newStart
        if (last < newStart){
            left.push(interval);
            // curr interval's first is greater than newInterval
        } else if(first > newEnd) {
            right.push(interval);
        } else {
            // there is an overlap
            newStart = Math.min(newStart, first);
            newEnd = Math.max(last, newEnd);
        }
    }

    return [...left, [newStart, newEnd], ...right];
};

let intervals = [[1,3],[6,9]], newInterval = [2,5];
console.log(insert(intervals, newInterval));