var checkIfInstanceOf = function(obj, classFunction) {
    const prototype = classFunction?.prototype;
    while (obj !== null && obj !== undefined) {
        obj = Object.getPrototypeOf(obj);
        if (obj === prototype) return true;
    }
    return false; 
};