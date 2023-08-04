const reverseArr = (nums) => {
    let i = 0, j = nums.length-1;
    let arr = [...nums];
    while (i<j){
        let tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
        i++;
        j--;
    }
    
    let n = arr.length-1;

    for(let i=0; i<=n/2; i++) {
      let temp = arr[i];
      arr[i] = arr[n-i];
      arr[n-i] = temp;
    }
    console.log(arr);

    return nums;
}

let nums = [1,2,3,4,5,6,7];
console.log(reverseArr(nums));