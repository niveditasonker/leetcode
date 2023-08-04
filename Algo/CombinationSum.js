var combinationSum = function(candidates, target) {
    let tmp = [];
    let res = [];

    function iterate(idx, sum){
        if (sum > target) return;

        if (sum ==target){
            res.push([...tmp]);
            return;
        }

        for (let i=idx;i<candidates.length; i++){
            if (candidates[i]>target) continue;
            tmp.push(candidates[i]);
            iterate(i, sum+candidates[i]);
            tmp.pop();
        }
    }

    iterate(0,0);
    return res;
};

let candidates = [2,3,6,7], target = 7;
console.log(combinationSum(candidates, target));

// Second solution:

var combinationSum2 = function(candidates, target) {
    let index = 0
    let tempDataStruct = []
    let result = []

    function backtracking(index, target, tempDataStruct) {
        if(target === 0) {
            result.push([...tempDataStruct])
            return
        }
    
        if(target < 0) return;
    
        for(let i=index; i<candidates.length; i++) {
            tempDataStruct.push(candidates[i])
            backtracking(i, target-candidates[i], tempDataStruct)
            tempDataStruct.pop()
        }
    }
    backtracking(index, target, tempDataStruct)
    return result;
};
console.log(combinationSum(candidates, target));