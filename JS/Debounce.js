function debounce(func, wait) {
    // throw 'Not implemented!';
    let timeoutId;
  
    return function(...args){
      clearTimeout(timeoutId);
    
      timeoutId = setTimeout(() => {
         timeoutId = null;
        //  Has the same `this` as the outer function's
        // as it's within an arrow function.
         func.apply(this, args);
      }, wait);
    }
  
  }

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce2 = function(fn, t) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);

      timeout = setTimeout(()=>{
          fn(...args);
      }, t);
  }
};


const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms

const log2 = debounce(console.log, 200);
log2('from debounce 2 Hello'); // cancelled
log2('from debounce 2....Hello'); // cancelled
log2('from debounce 2...and Hello'); // Logged at t=100ms  


//clearTimeout() is a forgiving function and passing an invalid ID to clearTimeout()
// silently does nothing; no exception is thrown.
// Hence we don't have to check for timeoutID === null before using clearTimeout().

// Leading trailing :
// https://dev.to/uttarasriya/js-polyfill-part-4-debounce-throttle-leading-trailing-options-3nn8