var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    let map = {};

    for (let tm of time) {
        let remainder = tm%60;
        // console.log(`remainder= ${remainder}`);

        if(map[60-remainder]) {
            // console.log(`if... ${map[60 -remainder]}`);
            count += map[60 -remainder];
            // console.log(`if...count= ${count}`);
        } else if (remainder === 0 && map[remainder]) {
            // console.log(`else...count= ${map[remainder]}`);
            count += map[remainder];
            // console.log(`else...count= ${count}`);
        }

        if (map[remainder]) {
            map[remainder]++
        } else {
            map[remainder] = 1;
        }
    }

    return count;
};

let time = [30,20,150,100,40];
console.log(numPairsDivisibleBy60(time));