var merge = function(intervals) {
    let i =1; j=0;

    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    
    while (i<intervals.length) {
        // while ((j+1)< intervals.length && (intervals[j][1] >= intervals[j+1][0])) {
        //     j++;
        // }

        if (result[j][1] >= intervals[i][0]) {
            result[j] = [result[j][0], Math.max(intervals[i][1], result[j][1])];
        }else{
            result.push(intervals[i]);
            j++;
        }
        i++;
       
    }
    return result; 

    intervals.sort((a,b)=>a[0]-b[0])
    for(let i =1; i<intervals.length;i++){
        let [x,y] = intervals[i]
        let [prevX,prevY] = intervals[i-1]
        if(x <= prevY) {
            intervals[i-1][1] = Math.max(y,prevY);
            intervals.splice(i,1)
            i--
        }
    }
    return intervals  
};

let intervals = [[1,3],[2,6],[8,10],[15,18]];
console.log(merge(intervals));

intervals = [[1,4],[4,5]];
console.log(merge(intervals));

intervals = [[1,4],[2,3]];
console.log(merge(intervals));

intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]];
console.log(merge(intervals));
