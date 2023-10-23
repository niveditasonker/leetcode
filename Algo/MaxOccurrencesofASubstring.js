var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let map = {};
    let max = 0;

    for (let i=0; i<=s.length-minSize; i++){
        const sub = s.substring(i, i+minSize);
        const tmpSet = new Set(sub);

        console.log(tmpSet, tmpSet.size, sub, sub.length-1);

        if(tmpSet.size <= maxLetters){
            const count = map[sub] || 0;
            map[sub] = count+1;

            // if(map[sub]){
            //     // console.log("here");
            //     map[sub] += 1;
            // } else {
            //     // console.log("here 2");
            //     map[sub] = 1;
            // }

            // console.log(map);

            max = Math.max(map[sub], max);
        }

        
    }

    return max;
};

let s = "aababcaab", maxLetters = 2, minSize = 3, maxSize = 4;

console.log(maxFreq(s, maxLetters, minSize, maxSize));

s = "aaaa", maxLetters = 1, minSize = 3, maxSize = 3;
console.log(maxFreq(s, maxLetters, minSize, maxSize));