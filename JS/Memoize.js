const memoize = (func) => {
    // a cache of results
    const results = {};
    // return a function for the cache of results
    return (...args) => {
      // a JSON key to save the results cache
      const argsKey = JSON.stringify(args);
      // execute `func` only if there is no cached value of clumsysquare()
      if (!results[argsKey]) {
        // store the return value of clumsysquare()
        results[argsKey] = func(...args);
      }
      // return the cached results
      return results[argsKey];
    };
  };
  
  // wrap clumsysquare() in memoize()
  const clumsysquare = memoize(num => {
      let result = 0;
      for (let i = 1; i <= num; i++) {
          for (let j = 1; j <= num; j++) {
              result++;
          }
      }
      return result;
  });
  
  // console.log(clumsysquare(190));
  // console.log(clumsysquare(799));
  // console.log(clumsysquare(4000));
  // console.log(clumsysquare(7467));
  // console.log(clumsysquare(9666));

  const memoizedValue = {};
  const clumsysquare2 = (num) => {
    if ((memoizedValue[num] !== undefined)) {
      return memoizedValue[num];
    }
  
    let result = 0;
    for (let i = 1; i <= num; i++) {
      for (let j = 1; j <= num; j++) {
        result++;
      }
    }
  
    memoizedValue[num] = result;
    return result;
  };
  
  console.log(clumsysquare2(190));
  console.log(clumsysquare2(799));
  console.log(clumsysquare2(4000));
  console.log(clumsysquare2(7467));
  console.log(clumsysquare2(9666));  


  function multiplyBy2(x) {
    return x * 2;
  }
  
function memoize2(func) {
    let map = new Map();
  
    return function(x) {
      if (map.has(x)) {
        return `Returned from memory ${map.get(x)}`;
      }
  
      let result = func(x);
      map.set(x, result);
  
      return `Returned from function ${result}`;
    }
}
  
let wrapper = memoize2(multiplyBy2);
console.log(wrapper(2)); // Returned from function 4
console.log(wrapper(4)); // Returned from function 8
console.log(wrapper(5)); // Returned from function 10
console.log(wrapper(2)); // Returned from memory 4
console.log(wrapper(2)); // Returned from memory 4
console.log(wrapper(6)); // Returned from function 12

// https://javascript.plainenglish.io/intro-to-memoization-in-javascript-with-examples-e1a2b7f44575