const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
 
 const curriedJoin = curry(join)
 
 curriedJoin(1, 2, 3) // '1_2_3'
 
 curriedJoin(1)(2, 3) // '1_2_3'
 
 curriedJoin(1, 2)(3);

//  curriedJoin(1, 2, 3) // '1_2_3'
 const curryFn = (a) => {
    return (b) => {
        return (c) => {
            return `${a}_${b}_${c}`;
        }
    }
 }

//  curriedJoin(1)(2, 3) // '1_2_3'
function curry(fn) {
    return function curryInner(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      }
      return (...args2) => curryInner(...args, ...args2);
    };
  }
  


// const curryFn3 = (a) => {
//     return (b,c) => {
//         return `${a}_${b}_${c}`;
//     }
// }
