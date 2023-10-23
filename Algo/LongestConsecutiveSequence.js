var longestConsecutive = function(nums) {
    let set = new Set();
    let maxCount = 0;

    for (let num of nums){
        set.add(num);
    }

    for (let num of nums){
        if(!set.has(num-1)) {
            console.log(num, "set does not has num-1",);
            let count = 0;
            let currNum = num;
            // console.log(currNum, num);

            while(set.has(currNum)){
                console.log(`currNum ${currNum}, num${num}, count${count}`);
                currNum++;
                count++;
            }
            maxCount = Math.max(count, maxCount);
        }
    }

    return maxCount;
};

/*
set.add(): O(1)
set.has(): O(1)
while loop: O(n)
Math.max(): O(1)
Therefore, the overall complexity of the program is O(n).

*/

let nums = [100,4,200,1,3,2];
console.log(longestConsecutive(nums));