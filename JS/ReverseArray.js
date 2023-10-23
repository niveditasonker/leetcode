const reverseArr = (nums) => {
    let i = 0, j = nums.length-1;
    // let arr = [...nums];
    // console.log(arr);

    while (i<j){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        i++;
        j--;
    }
    


    return nums;
}
const reverseArr2 = (arr) => {
    // sol 2
    let n = arr.length-1;

    for(let i=0; i<=n/2; i++) {
      let temp = arr[i];
      arr[i] = arr[n-i];
      arr[n-i] = temp;
    }
    console.log(arr);
    return arr;
}
const reverseArr3 = (arr) => {
  // sol 2
  let n = arr.length-1;
  const reversedArr = [];

  for(let i=n; i>=0; i--) {
    reversedArr.push(arr[i]);
  }
  // console.log(arr);
  return reversedArr;
}



let nums = [1,2,3,4,5,6,7];
console.log(reverseArr(nums));

nums = [1,2,3,4,5,6,7];
console.log("Reversed 2", reverseArr2(nums));


nums = [1,2,3,4,5,6,7];
console.log("Reversed 3", reverseArr3(nums));