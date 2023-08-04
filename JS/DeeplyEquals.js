
// https://www.zhenghao.io/posts/js-data-type
/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    if (typeof(o1) !== typeof(o2)) {
        return false;
    }

    if (Array.isArray(o1) !== Array.isArray(o2)){
        return false;
    }

    if (typeof(o1) !== 'object' || o1 === null || o2 === null){
        return o1 === o2;
    }

    if (Object.keys(o1).length != Object.keys(o2).length) {
        return false;
    }

    for (let prop in o1){
        if (!areDeeplyEqual(o1[prop], o2[prop])) {
            return false;
        }
    }

    return true;
};

let o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2};
console.log(areDeeplyEqual(o1, o2));

o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2};
console.log(areDeeplyEqual(o1, o2));

o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]};
console.log(areDeeplyEqual(o1, o2));
/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
function helper(key, value) {
    if (value && typeof value === "object" && !Array.isArray(value))
        return Object.fromEntries(Object.entries(value).sort());
    else
        return value;
}

var areDeeplyEqual = function(o1, o2) {
    const stringifiedO1 = JSON.stringify(o1, helper);
    const stringifiedO2 = JSON.stringify(o2, helper);

    return stringifiedO1 === stringifiedO2;
};

function shouldDeepCompare(type) {
    return type === '[object Object]' || type === '[object Array]';
}
  
function getType(value) {
    return Object.prototype.toString.call(value);
}
  
/**
* @param {*} valueA
* @param {*} valueB
* @return {boolean}
*/
function deepEqual(valueA, valueB) {
    const type1 = getType(valueA);
    const type2 = getType(valueB);
  
    if (type1 === type2 && shouldDeepCompare(type1) && shouldDeepCompare(type2)) {
      const kvPairs1 = Object.entries(valueA);
      const kvPairs2 = Object.entries(valueB);
  
      if (kvPairs1.length !== kvPairs2.length) {
        return false;
      }
  
      return kvPairs1.forEach(
        // Make sure the other objects have the same properties defined.
        ([k, v]) => Object.hasOwn(valueB, k) && deepEqual(v, valueB[k]),
      );
    }
  
    const returnVal = Object.is(valueA, valueB);
    return returnVal;
}
console.log("deepEqual", deepEqual(o1, o2));

// Deep equal for objects from BFE
function isEqual(a, b, map = new Map()) {
    
    if(a === b) return true; // covers use case for primitive types and same objects
    
    if(typeof a !== 'object' ||  typeof b !== 'object'){
        return false;
    }
    
    // to handle circular ref use case
    if (map.has(a) && (map.get(a) === b)) return true;
    map.set(a, b);
    
    let keysA = Reflect.ownKeys(a);
    let keysB = Reflect.ownKeys(b);
    
    if(keysA.length !== keysB.length){
        return false;
    }
    
    for(let i = 0; i < keysA.length; i++){
        // compare keys too for use case like 
        // let obj1 = { a: { c: '4' } }
        // let obj2 = { b: { d: '4' } }
        if(keysA[i] !== keysB[i] || !isEqual(a[keysA[i]], b[keysB[i]], map)){
            return false;
        }
    }
    
    return true;
}