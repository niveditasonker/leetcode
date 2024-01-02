var permute = function(nums) {
    let res = [];
    let usedSet = new Set();

    const dfs = () => {
        if (usedSet.size === nums.length) {
            res.push(Array.from(usedSet));
            return;
        }

        for (let i=0; i<nums.length; i++){
            if(usedSet.has(nums[i])) continue;

            usedSet.add(nums[i]);
            dfs();
            usedSet.delete(nums[i]);
        }
    }

    dfs();
    return res;
};

var permuteLonger = function(nums) {
    let res = []; // final result
    let path = []; // current potential answers 
    let set = new Set(); // set to track of what we have already used

    const dfs = () => {
        if (path.length === nums.length) {
            res.push([...path]); //clone the arr else with pass by reference it will mess up the result array
        }

        for (let i=0; i< nums.length; i++){
            if (set.has(nums[i])) continue; // if we have already seen this number, skip it

            // if not add it to set & path
            path.push(nums[i]);
            set.add(nums[i]);

            dfs(); // continue dfs till we hit base case of just one element

            path.pop(); // once we are out of dfs, remove the element from path, so we don't visit again and again
            set.delete(nums[i]);
        }
    }

    dfs();

    return res;
}



let nums= [1,2,3];
console.log(permute(nums));
// console.log(permuteLonger(nums));