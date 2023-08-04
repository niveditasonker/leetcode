/**
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
/**
 * @template {Function} T
 * @param {T} func
 * @return {T}
 */
export default function once(func) {
    // throw 'Not implemented!';
    let firstCall = false;
    let value;
  
    return function(...args) {
      if(!firstCall){
        value = func.apply(this, args);
        firstCall = true;
      }
  
      return value;
    };
  
}