/**
 * @param {Object} obj
 * @return {Object}
 */

/*
Intuition
Since the object can have subarrays and subobjects, recursion should be used.
If the current recursive call is not an object, dealing with this is easy, 
and will be discussed below. If it is an object, then one should create a new ,
object let's call this object compacted. Then, iterate through each key in the 
object, and if the value is desireable (is not falsy), add the key and value to
compacted. When the entire object is iterated through, return comapcted.

Approach
1. Check if obj is null. If so, return null.
2. Check if obj is an array.
    If so, we can first use the filter function. In this problem, one should use
    obj.filter(Boolean). Boolean is a function that returns true if the input value
    is truthy, and false if falsy. And so, the filter function will iterate through 
    each element of the array and input it into the Boolean function (the filter
    function calls Boolean(obj[i]) for all valid i), and if the Boolean function
    returns true, filter will add the element into the return array, otherwise it 
    will leave it out of the return array.
3. Next, we should call the map function on the array the filter function returns. 
    The map function replaces each element in the array with the result of inputting the
    element in a specified function. In this problem, we want to make a recursive call on
    compactObject for each element, so that we can continue to remove falsy elements in
    any potential subobjects. So, we write obj.filter(Boolean).map(compactObject); so that 
    he map function will call compactObject(obj[i]) for all i in the array that the filter
    function returns. To make it clear, one can conceptualize this as: filterArr = obj.filter(Boolean);,
    return filterArr.map(compactObject);
4. Check if obj is not an object. If it isn't return obj.
    If the past three steps have done nothing, that means obj is not null, an array, or
    not an object. So, it is an object, and we treat it as such.
5. Create empty variable. Here, it will be called compacted.
    Iterate through each key in obj. For each key, we call compactObject on the key's
    corresponding value, so we can remove any falsy values in any potential subarrays or 
    ubobjects in the value. If the result of this is truthy, we add the key and value to
    the compacted object. Else, do nothing, we do not want to add the key and falsy value.
6. After iterating through all of obj, return compacted.
*/


var compactObject = function(obj) {
    if (obj === null) return null;

    if (Array.isArray(obj)){
        return obj.filter(Boolean).map(compactObject);
    }

    if (typeof obj !== 'object'){
        return obj;
    }

    const res = {};

    for (const key in obj){
        let val = compactObject(obj[key]);
        if(Boolean(val)){
            res[key] = val;
        }
    }

    return res;
};

let obj = [null, 0, false, 1];
console.log(compactObject(obj));

obj = {"a": null, "b": [false, 1]};
console.log(compactObject(obj));

obj = [null, 0, 5, [0], [false, 16]];
console.log(compactObject(obj));