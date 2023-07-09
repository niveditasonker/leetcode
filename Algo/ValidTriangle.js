var triangleNumber = function(nums) {
    let res = 0;
    let combo = [];

    if (!nums || !nums.length){
        return res;
    }

    nums.sort((a,b) => a-b);
    let i, j;

    console.log(nums);

    for (let k=nums.length-1; k>1; k--){
        j = k-1;
        i = 0;

        while(i<j){
            if ((nums[i]+nums[j]) > nums[k]){
                res += (j-i);
                j--;
                combo.push([nums[i], nums[j], nums[k]]);
            } else {
                i++;
            }
        }
    }

    console.log(combo);
    return res;
};

// O(n^2);

let nums = [2,2,3,4];
// console.log(triangleNumber(nums));

nums = [4,2,3,4];
// console.log(triangleNumber(nums));


function findTriangleCombinations(nums) {
    const combinations = [];
    const sortedNums = nums.sort((a, b) => a - b);
  
  for (let i = 0; i < sortedNums.length - 2; i++) {
    for (let j = i + 1; j < sortedNums.length - 1; j++) {
      for (let k = j + 1; k < sortedNums.length; k++) {
        if (
          sortedNums[i] + sortedNums[j] > sortedNums[k] &&
          sortedNums[j] + sortedNums[k] > sortedNums[i] &&
          sortedNums[k] + sortedNums[i] > sortedNums[j]
        ) {
          combinations.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        }
      }
    }
  }

  return combinations;
}

// Example usage:
const numsArr = [2, 2, 3, 4];
console.log(findTriangleCombinations(numsArr));

function findTriangleCombinations2(nums) {
  const combinations = [];
  const sortedNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 2; i++) {
    let k = i + 2;
    for (let j = i + 1; j < sortedNums.length - 1; j++) {
      while (k < sortedNums.length && sortedNums[i] + sortedNums[j] > sortedNums[k]) {
        combinations.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
        k++;
      }
    }
  }

  return combinations;
}

console.log(findTriangleCombinations2(numsArr));
