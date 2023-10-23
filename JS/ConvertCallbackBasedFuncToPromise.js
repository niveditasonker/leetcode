/**
 * @param {Function} fn
 * @return {Function<Promise<number>>}
 */
var promisify = function(fn) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
          const handleFunc = (val, error) =>{
              if(error){
                  reject(error);
              } else {
                  resolve(val);
              }
          }
          return fn(handleFunc, ...args);
        });
  
    }
  }
  
/**
 * const asyncFunc = promisify(callback => callback(42));
 * asyncFunc().then(console.log); // 42
 */