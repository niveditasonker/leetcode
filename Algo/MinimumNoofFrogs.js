// refer to 3rd solution

var minNumberOfFrogs = function(croakOfFrogs) {
    let n = croakOfFrogs.length-1;
    let count = new Array(n).fill(0);
    let frogs = 0;
    let maxFrogs = 0;

    for (let c of croakOfFrogs) {
        const idx = "croak".indexOf(c);

        count[idx]++;
        console.log(`c: ${c}, idx: ${idx}, count: ${count[idx]}`)

        if (idx===0){
            frogs++;
            maxFrogs = Math.max(frogs, maxFrogs);
        } else if(idx==4) {
            frogs--;
        } else {
            if (count[idx] > count[idx - 1]) {
              return -1;
            }
        }
        // console.log(`frogs: ${frogs}, maxFrogs: ${maxFrogs}`)
    }

    return frogs === 0 ? maxFrogs : -1;
};

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs3 = function(croakOfFrogs) {
    let c=0
    let r=0
    let o=0
    let a=0
    let k=0
    //Make characters and sizes that are not in sequence string return -1
    for(let croakOfFrog of croakOfFrogs){
        if(croakOfFrog =='c') c++
        else if(croakOfFrog =='r') r++
        else if(croakOfFrog =='o') o++
        else if(croakOfFrog =='a') a++
        else if(croakOfFrog =='k') k++
        else { return -1}

        if(c<r || r<o || o<a || a<k) return -1
    }
    console.log(c,r,o,a,k)
    if(c !== r || r!== o || o!== a || a!==k) return -1
     
    //return ans
    let temp_c =0 //How many are starting to call
    let max_c =0  // Now have most frogs 
    for(let croakOfFrog of croakOfFrogs){
        if(croakOfFrog =='c') {
           temp_c++ 
           max_c = Math.max(temp_c, max_c);
        }
        if(croakOfFrog =='k'){
            temp_c--
        }

    }
    return max_c
};

var minNumberOfFrogs2 = function(croakOfFrogs) {
    // Handling invalid case like 'croakcro'
    if (croakOfFrogs.length % 5 !== 0) return -1;

    // 'k' is not needed in the map, because it's the last letter the frog is singing so we won't use it anymore
    const map = {'c': 0, 'r': 0, 'o': 0, 'a': 0};
    // Currently how many frogs are singing together
    let currentNumOfFrogs = 0;
    // Max number of frogs singing together
    let maxNumOfFrogs = 0;

    for (const letter of croakOfFrogs) {
        if (letter === 'c') {
// If 'c' appears, means another frog start singing => so we increase map['c'] and counter and update the global max frogs
            map['c']++;
            currentNumOfFrogs++;
            maxNumOfFrogs = Math.max(maxNumOfFrogs, currentNumOfFrogs);
        } else if (letter === 'r') {
// If 'r' appears => check whether the frog already song 'c' before 'r', if not, invalid; 
            if (map['c'] === 0) return -1;
// Otherwise, decrease map['c'] => It's like reseting map['c'] value so that later there's another frog sings, we could validate if it's a valid sing or not;
            map['c']--;
// For sure, we need to update map['r'] => it's like moving our tracker to 'r' now for the current frog who are singing
            map['r']++;
        } else if (letter === 'o') {
// Save idea as above
            if (map['r'] === 0) return -1;
            map['r']--;
            map['o']++;
        } else if (letter === 'a') {
// Save idea as above
            if (map['o'] === 0) return -1;
            map['o']--;
            map['a']++;
        } else if (letter === 'k') {
// If 'k' appears => check if there was a 'a' before, if not, invalid; Otherwise decrease 'a' count
            if (map['a'] === 0) return -1;
            map['a']--;
// Also need to decrease the currentNumOfFrogs => because the frog is done its job. It can sing another string again.
            currentNumOfFrogs--;
        }
    }
// At the end, need to check if the currentNumOfFrogs is 0, if not, means there are some frogs haven't reached 'k' yet => invalid
    return currentNumOfFrogs !== 0 ? -1 : maxNumOfFrogs;
};

let croakOfFrogs = "croakcroak";
console.log(minNumberOfFrogs(croakOfFrogs));
// console.log(minNumberOfFrogs2(croakOfFrogs));
console.log(minNumberOfFrogs3(croakOfFrogs));

croakOfFrogs = "crcoakroak";
console.log(minNumberOfFrogs(croakOfFrogs));
// console.log(minNumberOfFrogs2(croakOfFrogs));
console.log(minNumberOfFrogs3(croakOfFrogs));


croakOfFrogs = "croakcrook";
console.log(minNumberOfFrogs(croakOfFrogs));
// console.log(minNumberOfFrogs2(croakOfFrogs));
console.log(minNumberOfFrogs3(croakOfFrogs));

croakOfFrogs = "ccckkk";
console.log(minNumberOfFrogs(croakOfFrogs));
console.log(minNumberOfFrogs3(croakOfFrogs));



