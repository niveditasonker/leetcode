/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(o1, o2) {
    if (!isObject(o1) && !isObject(o2)) return o1 === o2 ? {} : [o1, o2]

    if (!isObject(o1) || !isObject(o2)) {
        return [o1, o2]
    } 

    if (Array.isArray(o1) !== Array.isArray(o2)) {
        return [o1, o2]
    }

    const diff = {}

    for (const key in o1) {
        if (key in o2) {
            const res = objDiff(o1[key], o2[key])
            if (Object.keys(res).length) {
                diff[key] = res
            }
        }
    }

    return diff
};

function isObject(obj) {
    return obj !== null && typeof obj === "object"
}

let obj1 = {}, obj2 = {
  "a": 1, 
  "b": 2
}

console.log(objDiff(obj1, obj2));

obj1 = {
    "a": 1,
    "v": 3,
    "x": [],
    "z": {
      "a": null
    }
  }
obj2 = {
    "a": 2,
    "v": 4,
    "x": [],
    "z": {
      "a": 2
    }
  }

  console.log(objDiff(obj1, obj2));

/**
 * @param {object} obj1
 * @param {object} obj2
 * @return {object}
 */
function objDiff(obj1, obj2) {
    const res = {};
    for (const key in obj1) {
        if (!(key in obj2)) continue;
        const val1 = obj1[key];
        const val2 = obj2[key];
        if (typeof val1 !== 'object' || typeof val2 !== 'object') {
            if (val1 !== val2) {
                res[key] = [val1, val2];
            }
        } else if (Array.isArray(val1) !== Array.isArray(val2)) {
            res[key] = [val1, val2];
        } else {
            const temp = objDiff(val1, val2);
            const len = Object.keys(temp).length;
            if (len === 0) continue;
            res[key] = temp;
        }
    }
    return res;
};