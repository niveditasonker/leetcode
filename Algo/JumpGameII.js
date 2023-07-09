var jump = function(nums) {

    const size = nums.length;

    // destination is last index
    let destination = size-1;

    let curCoverage = 0, lastJumpIdx = 0;

    // counter of jump
    let timesOfJump = 0;

    // Quick response if start index == destination index == 0
    if( size == 1 ){
        return 0;
    }


    // Greedy stragegy: extend coverage as long as possible with lazp jump
    for( let i = 0 ; i < size ; i++){

        // extend coverage
        curCoverage = Math.max(curCoverage, i + nums[i] );

        // forced to jump (by lazy jump) to extend coverage
        if( i == lastJumpIdx ){

            lastJumpIdx = curCoverage;

            timesOfJump++;

            // check if we reached destination already
            if( curCoverage >= destination){
                return timesOfJump;
            }
        }
    }

    return timesOfJump;
    

};

/*
Idea:
Since each element of our input array (N) represents the maximum jump length
and not the definite jump length, that means we can visit any index
between the current index (i) and i + N[i]. Stretching that to its logical conclusion,
we can safely iterate through N while keeping track of the furthest index
reachable (next) at any given moment (next = max(next, i + N[i])).
We'll know we've found our solution once next reaches or passes the last index (next >= N.length - 1).

The difficulty then lies in keeping track of how many jumps it takes to reach that point.
We can't simply count the number of times we update next, as we may see that happen more 
than once while still in the current jump's range. In fact, we can't be sure of the
best next jump until we reach the end of the current jump's range.

So in addition to next, we'll also need to keep track of the current jump's
endpoint (curr) as well as the number of jumps taken so far (ans).

Since we'll want to return ans at the earliest possibility, we should base it on next,
as noted earlier. With careful initial definitions for curr and next, we can start our
iteration at i = 0 and ans = 0 without the need for edge case return expressions.

Time Complexity: O(N) where N is the length of N
Space Cmplexity: O(1)

*/

var jumpII = function(N) {
    let len = N.length - 1, curr = -1, next = 0, ans = 0
    for (let i = 0; next < len; i++) {
        if (i > curr) ans++, curr = next
        next = Math.max(next, N[i] + i)
    }
    return ans
};

var jump2 = function(N){
    let jump = 0;
    let farthestJump = 0;
    let currJump = 0;

    for (let i=0;i<N.length-1; i++){
        farthestJump = Math.max(farthestJump, (i+N[i]));

        if(i===currJump){
            jump++;
            currJump = farthestJump;
        }
    }

    return jump;
}

let nums = [2,3,1,1,4];
console.log(jump2(nums));

nums = [2,3,0,1,4];
console.log(jump2(nums));