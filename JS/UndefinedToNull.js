


/**
 * @param {any} arg
 * @returns any
 */
function undefinedToNull(arg) {
    // your code here
    if (arg == undefined) return null;
    else if (Array.isArray(arg)) {
      return arg.map(undefinedToNull);
    } else  if (Object.prototype.toString.call(arg) === '[object Object]') {
      return Object.keys(arg).reduce((acc, currentKey) => ({
        ...acc,
        [currentKey]: undefinedToNull(arg[currentKey]),
      }), {});
    }
    return arg;
  }
  
  console.log(undefinedToNull({a: undefined, b: 'BFE.dev'}));
  console.log(undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']}));
  