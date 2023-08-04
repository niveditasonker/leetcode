Array.prototype.myReduce = function(callback, initailValue){
    let arr = this; // array on which reduce function is called
    let argumentsLen = arguments.length // reduce function argument(callback and initail value)
    if(arr.length === 0 && argumentsLen === 1){
        throw new TypeError('Reduce of empty array with no initial value')
    }

    let accumulator = argumentsLen === 1 ? arr[0] : initailValue
    let index = argumentsLen === 1 ? 1 : 0 // since we have used 1st item in the array as accumulator, we need to skip the 1st iteration

    for(let i = index; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i], i, arr)
    }
    return accumulator
}

Array.prototype.myReduce2 = function (callback, initial) {
    if(!callback || (!this.length && arguments.length == 1)) throw 'error';
    
    for(let i = 0; i < this.length; i++){
      if(i == 0 && arguments.length == 1){
        initial = this[i];
      }else{
        initial = callback.apply(this,[initial,this[i],i,this]);
      }
    }

    return initial;
}


// Leetcode:
var reduceLeetcode = function(nums, fn, init) {
  if (!nums) {
      return init;
  }

  let val = init;
  
  for (let i=0; i<nums.length; i++){
      val = fn(val, nums[i]);
  }
  
  return val;    
};

console.log([1,2,3,4].myReduce((acc, value) => {
  return acc + value;
}));

console.log([1,2,3,4].myReduce2((acc, value) => {
  return acc + value;
}));