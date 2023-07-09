// Collaz Conjecture
var getKth = function(lo, hi, k) {
    let pow = new Map();
    let arr = [];

    for (let x=lo; x<= hi; x++){
        let numSteps = getPow(x);
        arr[hi-x] = [x, numSteps];
        pow.set(numSteps, x);

        console.log("In pow",  pow);
    }


    function getPow(p) {
        if (pow.has(p)) return pow,get(p);
        // let ans = x, count = 0
        let steps = 0;
        while(p !== 1) {
            
            if(p % 2 === 0) {
                p = p / 2;
            } else {
                p = 3*p + 1;
            }
            steps++;
        }

        console.log("===>",p, steps, pow);
        return pow[p] = steps;
    }

    arr.sort((a, b) => a[1] - b[1] || a[0]- b[0]);

    return arr[k-1][0];
};


var getKth2 = function (lo, hi, k) {
    let powerMap = new Map()

    for (let i = lo; i <= hi; i++) {
        let count = 0
        let currentNum = i;
        
        while (currentNum !== 1) {
            if (powerMap.has(currentNum)) {
                count += powerMap.get(currentNum)
                break
            } else {
                if (currentNum % 2 === 0) {
                    currentNum = currentNum / 2
                    count++
                } else {
                    currentNum = currentNum * 3 + 1
                    count++
                }
            }

        }
        powerMap.set(i, count)

    }
    return Array.from(powerMap).sort((a, b) => a[1] - b[1])[k - 1][0]
}

let lo = 12, hi = 15, k = 2;
console.log(getKth(lo, hi, k));
console.log(getKth2(lo, hi, k));