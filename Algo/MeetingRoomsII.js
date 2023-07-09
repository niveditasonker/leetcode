var minMeetingRooms = function(intervals) {
    const starts = intervals.map(x => x[0]);
    const ends = intervals.map(x => x[1]);

    starts.sort((a, b) => a-b);
    ends.sort((a, b) => a-b);

    console.log(starts);
    console.log(ends);

    let rooms = 1; 
    let end = 0;

    for (let i=0; i< starts.length; i++){
        console.log(`starts: ${starts[i]}, end: ${end}, ends: ${ends[end]}}`);
        if (starts[i] >= ends[end]) {
            rooms--;
            end++;
            console.log(`inside if rooms: ${rooms}, end: ${end}`);
        } else {
            rooms++;
        }
        
        console.log(`outside if rooms: ${rooms}`);
    }
    return rooms;
};

let intervals = [[0,30],[5,10],[15,20]];
console.log(minMeetingRooms(intervals));

intervals = [[7,10],[2,4]];
console.log(minMeetingRooms(intervals));

// other solution: https://leetcode.com/problems/meeting-rooms-ii/solutions/3114048/very-easy-and-intuitive-javascript-approach-beats-88-of-javascript-solution/