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

// Using trailing:
function debounce(func, wait, options = {}) {
  let timeoutId;

  return function (...args) {
    const shouldCallNow = options.trailing && !timeoutId;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null;

      if (!options.trailing || shouldCallNow) {
        func.apply(this, args);
      }
    }, wait);

    if (shouldCallNow) {
      func.apply(this, args);
    }
  };
}

// Example usage:
const debouncedFn = debounce((value) => {
  console.log(`Debounced: ${value}`);
}, 300, { trailing: true });

debouncedFn("Hello");
debouncedFn("World");
debouncedFn("OpenAI");

// using leading:
function debounce(func, wait, options = {}) {
  let timeoutId;
  let leadingTimeoutId;
  let leadingExecuted = false;

  return function (...args) {
    const shouldCallLeading = options.leading && !leadingTimeoutId;
    const shouldCallTrailing = !options.leading && options.trailing;

    clearTimeout(timeoutId);
    clearTimeout(leadingTimeoutId);

    if (shouldCallLeading) {
      func.apply(this, args);
      leadingExecuted = true;
    }

    leadingTimeoutId = setTimeout(() => {
      leadingTimeoutId = null;

      if (shouldCallTrailing && leadingExecuted) {
        func.apply(this, args);
        leadingExecuted = false;
      }
    }, wait);

    timeoutId = setTimeout(() => {
      if (!shouldCallLeading && !leadingExecuted) {
        func.apply(this, args);
      }
      leadingExecuted = false;
    }, wait);
  };
}

// Example usage:
const debouncedFnLeading = debounce((value) => {
  console.log(`Debounced: ${value}`);
}, 300, { leading: true });

debouncedFnLeading("Hello");
debouncedFnLeading("World");
debouncedFnLeading("OpenAI");



//clearTimeout() is a forgiving function and passing an invalid ID to clearTimeout()
// silently does nothing; no exception is thrown.
// Hence we don't have to check for timeoutID === null before using clearTimeout().

// Leading trailing :
// https://dev.to/uttarasriya/js-polyfill-part-4-debounce-throttle-leading-trailing-options-3nn8