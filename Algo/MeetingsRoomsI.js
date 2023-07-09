var canAttendMeetings = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    for (let i=1; i<intervals.length; i++){
        const [prevStart, prevEnd] = intervals[i-1];
        const [currStart, currEnd] = intervals[i];

        if (currStart < prevEnd) return false;
    }
    return true;
};

let interval= [[0,30],[5,10],[15,20]];
console.log(canAttendMeetings(interval));

interval = [[7,10],[2,4]];
console.log(canAttendMeetings(interval));
