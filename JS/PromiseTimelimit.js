var timeLimit = function(fn, t) {

  return async function(...args){
      const originalPromise = fn(...args);

      const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => {
              reject('Time Limit Exceeded');
          }, t);
      });

      return Promise.race([originalPromise, timeoutPromise]);
  }
};

//Use promise and call setTimeout for given time t.
// This is async call, next line will be executed just after this call,
// if callback is returned before next line completes execution then
// it will return promise rejection, otherwise promise will resolve regurarly.

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
      return new Promise(async (resolve, reject) => {
        const timeout = setTimeout(() => {
          reject("Time Limit Exceeded");
        }, t);
  
        try {
          const result = await fn(...args);
          resolve(result);
        } catch(err) {
          reject(err);
        }
        clearTimeout(timeout);
      });
    };
};
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */