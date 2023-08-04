/**
 * @param {any} object
 * @return {string}
 */
var jsonStringify = function(object) {
    if (object===null) {
        return "null";
    }

    if(typeof object== 'string'){
        return `"${object}"`;
    }

    if(Array.isArray(object)){
        const elements = object.map((elem) => jsonStringify(elem));
        return `[${elements.join(',')}]`;
    }

    if (typeof object === 'object'){
        const keys = Object.keys(object);
        const pairs = keys.map((k) => `"${k}":${jsonStringify(object[k])}`);
        return `{${pairs.join(',')}}`;
    }

    return String(object);
};

let obj = {"y":1,"x":2};
console.log(jsonStringify(obj));