/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    function toBe(value1){
        if (value1 === val) return true;
        throw new Error( "Not Equal");
    }

    function notToBe(value2){
        if (value2 !== val) return true;
        throw new Error("Equal");
    }

    return { toBe, notToBe }
};


expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"

expect(5).toBe(6); // true
expect(5).notToBe(5); // throws "Equal"

expect(1).toBe(5); // true
expect(5).notToBe(8); // throws "Equal"
