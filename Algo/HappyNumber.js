/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set()
    let sum = n

    while (sum !== 1) {
        let newSum = 0
        sum.toString().split('').forEach(v => newSum += v * v)
        
        if (set.has(newSum)) return false
        set.add(newSum)
        sum = newSum
    } 

    return true 
};



const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy2 = function(n) {
    /**
	 * Not necessary I think, but the OJ algorithm appears
	 * to return false for non-positive numbers also.
	 */
    if (n < 1) return false;
	
	/**
	 * This set will store numbers as we create them.
	 * If we create a number already in the set, we
	 * assume we're in an infinite cycle.
	 */
    let set = new Set();
	
    while (!set.has(n)) {
        set.add(n);
        let s = n.toString();
        n = 0;
        for (let i = 0; i < s.length; ++i) {
            n += squares[s[i]];
        }
        if (n == 1) return true;
    }
	
    return false;
};